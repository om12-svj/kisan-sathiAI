/**
 * KISAN SAHAY - Admin Dashboard
 */

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeSearch();
    loadDashboardData();
});

// ============================================
// NAVIGATION
// ============================================

function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;
            switchSection(section);
        });
    });
}

function switchSection(sectionName) {
    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.section === sectionName);
    });

    // Update sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(`${sectionName}-section`).classList.add('active');

    // Update title
    const titles = {
        overview: 'Overview',
        farmers: 'All Farmers',
        alerts: 'High Risk Alerts',
        reports: 'Reports',
        settings: 'Settings'
    };
    document.getElementById('section-title').textContent = titles[sectionName] || sectionName;

    // Load section data
    if (sectionName === 'farmers') loadFarmersTable();
    if (sectionName === 'alerts') loadAlerts();
    if (sectionName === 'reports') loadReports();
}

function toggleSidebar() {
    document.querySelector('.admin-sidebar').classList.toggle('open');
    document.querySelector('.admin-main').classList.toggle('expanded');
}

// ============================================
// DATA LOADING
// ============================================

function getAllFarmers() {
    const data = localStorage.getItem('kisan_farmers');
    return data ? JSON.parse(data) : [];
}

function getAllCheckIns() {
    const farmers = getAllFarmers();
    let allCheckIns = [];

    farmers.forEach(farmer => {
        const key = `kisan_checkins_${farmer.id}`;
        const checkIns = localStorage.getItem(key);
        if (checkIns) {
            const parsed = JSON.parse(checkIns);
            parsed.forEach(c => {
                allCheckIns.push({
                    ...c,
                    farmerId: farmer.id,
                    farmerName: farmer.name,
                    farmerMobile: farmer.mobile,
                    farmerVillage: farmer.village,
                    farmerDistrict: farmer.district
                });
            });
        }
    });

    // Sort by timestamp descending
    allCheckIns.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    return allCheckIns;
}

function loadDashboardData() {
    const farmers = getAllFarmers();
    const checkIns = getAllCheckIns();

    // Update stats
    document.getElementById('total-farmers').textContent = farmers.length;
    document.getElementById('total-checkins').textContent = checkIns.length;

    // Count risk levels
    const riskCounts = { LOW: 0, MODERATE: 0, HIGH: 0, CRITICAL: 0 };
    const latestByFarmer = {};

    checkIns.forEach(c => {
        if (!latestByFarmer[c.farmerId]) {
            latestByFarmer[c.farmerId] = c;
            riskCounts[c.riskLevel]++;
        }
    });

    document.getElementById('high-risk-count').textContent = riskCounts.HIGH;
    document.getElementById('critical-count').textContent = riskCounts.CRITICAL;
    document.getElementById('alert-count').textContent = riskCounts.HIGH + riskCounts.CRITICAL;

    // Update risk chart
    const total = Object.values(riskCounts).reduce((a, b) => a + b, 0) || 1;
    document.querySelector('.risk-bar.low').style.setProperty('--percentage', `${(riskCounts.LOW / total) * 100}%`);
    document.querySelector('.risk-bar.low .bar-value').textContent = riskCounts.LOW;
    document.querySelector('.risk-bar.moderate').style.setProperty('--percentage', `${(riskCounts.MODERATE / total) * 100}%`);
    document.querySelector('.risk-bar.moderate .bar-value').textContent = riskCounts.MODERATE;
    document.querySelector('.risk-bar.high').style.setProperty('--percentage', `${(riskCounts.HIGH / total) * 100}%`);
    document.querySelector('.risk-bar.high .bar-value').textContent = riskCounts.HIGH;
    document.querySelector('.risk-bar.critical').style.setProperty('--percentage', `${(riskCounts.CRITICAL / total) * 100}%`);
    document.querySelector('.risk-bar.critical .bar-value').textContent = riskCounts.CRITICAL;

    // Recent check-ins
    renderRecentCheckIns(checkIns.slice(0, 5));

    // District breakdown
    renderDistrictBreakdown(farmers);

    // Populate district filter
    populateDistrictFilter(farmers);
}

function renderRecentCheckIns(checkIns) {
    const container = document.getElementById('recent-checkins');

    if (checkIns.length === 0) {
        container.innerHTML = '<p style="color: #888; text-align: center; padding: 2rem;">No check-ins yet</p>';
        return;
    }

    container.innerHTML = checkIns.map(c => {
        const date = new Date(c.timestamp);
        const timeAgo = getTimeAgo(date);

        return `
            <div class="recent-item ${c.riskLevel.toLowerCase()}">
                <div class="recent-info">
                    <h4>${c.farmerName || 'Unknown'}</h4>
                    <p>${c.farmerVillage || ''}, ${c.farmerDistrict || ''}</p>
                </div>
                <span class="recent-time">${timeAgo}</span>
            </div>
        `;
    }).join('');
}

function renderDistrictBreakdown(farmers) {
    const districtCounts = {};
    farmers.forEach(f => {
        const district = f.district || 'unknown';
        districtCounts[district] = (districtCounts[district] || 0) + 1;
    });

    const container = document.getElementById('district-grid');
    const sorted = Object.entries(districtCounts).sort((a, b) => b[1] - a[1]);

    if (sorted.length === 0) {
        container.innerHTML = '<p style="color: #888;">No data available</p>';
        return;
    }

    container.innerHTML = sorted.slice(0, 12).map(([district, count]) => `
        <div class="district-item">
            <h5>${capitalizeFirst(district)}</h5>
            <span class="count">${count}</span>
        </div>
    `).join('');
}

function populateDistrictFilter(farmers) {
    const districts = [...new Set(farmers.map(f => f.district).filter(Boolean))];
    const select = document.getElementById('district-filter');

    districts.sort().forEach(d => {
        const option = document.createElement('option');
        option.value = d;
        option.textContent = capitalizeFirst(d);
        select.appendChild(option);
    });

    select.addEventListener('change', () => loadFarmersTable());
}

// ============================================
// FARMERS TABLE
// ============================================

function loadFarmersTable() {
    const farmers = getAllFarmers();
    const checkIns = getAllCheckIns();
    const filter = document.getElementById('district-filter').value;

    // Create lookup for latest check-in
    const latestCheckIn = {};
    checkIns.forEach(c => {
        if (!latestCheckIn[c.farmerId]) {
            latestCheckIn[c.farmerId] = c;
        }
    });

    let filtered = farmers;
    if (filter !== 'all') {
        filtered = farmers.filter(f => f.district === filter);
    }

    const tbody = document.getElementById('farmers-tbody');

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 2rem;">No farmers found</td></tr>';
        return;
    }

    tbody.innerHTML = filtered.map(farmer => {
        const lastCheck = latestCheckIn[farmer.id];
        const lastDate = lastCheck ? getTimeAgo(new Date(lastCheck.timestamp)) : 'Never';
        const lastRisk = lastCheck ? lastCheck.riskLevel : '-';

        const riskBadge = lastCheck ? `
            <span class="risk-badge-small ${lastRisk.toLowerCase()}">${lastRisk}</span>
        ` : '-';

        return `
            <tr>
                <td><strong>${farmer.name}</strong></td>
                <td>${farmer.mobile}</td>
                <td>${farmer.village || '-'}</td>
                <td>${capitalizeFirst(farmer.district) || '-'}</td>
                <td>${farmer.farmSize || '-'} acres</td>
                <td>${lastDate}</td>
                <td>${riskBadge}</td>
                <td>
                    <button class="action-btn" onclick="viewFarmerDetail('${farmer.id}')">View</button>
                </td>
            </tr>
        `;
    }).join('');
}

// ============================================
// ALERTS
// ============================================

function loadAlerts() {
    const checkIns = getAllCheckIns();
    const latestByFarmer = {};

    checkIns.forEach(c => {
        if (!latestByFarmer[c.farmerId]) {
            latestByFarmer[c.farmerId] = c;
        }
    });

    const highRisk = Object.values(latestByFarmer)
        .filter(c => c.riskLevel === 'HIGH' || c.riskLevel === 'CRITICAL')
        .sort((a, b) => {
            if (a.riskLevel === 'CRITICAL' && b.riskLevel !== 'CRITICAL') return -1;
            if (b.riskLevel === 'CRITICAL' && a.riskLevel !== 'CRITICAL') return 1;
            return new Date(b.timestamp) - new Date(a.timestamp);
        });

    const container = document.getElementById('alerts-list');
    const noAlerts = document.getElementById('no-alerts');

    if (highRisk.length === 0) {
        container.style.display = 'none';
        noAlerts.style.display = 'block';
        return;
    }

    container.style.display = 'flex';
    noAlerts.style.display = 'none';

    container.innerHTML = highRisk.map(c => `
        <div class="alert-item ${c.riskLevel.toLowerCase()}">
            <span class="alert-icon">${c.riskLevel === 'CRITICAL' ? '🆘' : '⚠️'}</span>
            <div class="alert-content">
                <h4>${c.farmerName || 'Unknown Farmer'}</h4>
                <p>Hope Level: ${c.hope}/10 | Score: ${c.score}</p>
                <div class="alert-meta">
                    <span>📍 ${c.farmerVillage || ''}, ${c.farmerDistrict || ''}</span>
                    <span>📱 ${c.farmerMobile || ''}</span>
                    <span>🕐 ${getTimeAgo(new Date(c.timestamp))}</span>
                </div>
            </div>
            <div class="alert-actions">
                <button class="btn-call" onclick="callFarmer('${c.farmerMobile}')">📞 Call</button>
                <button class="btn-view" onclick="viewFarmerDetail('${c.farmerId}')">View Details</button>
            </div>
        </div>
    `).join('');
}

// ============================================
// REPORTS
// ============================================

function loadReports() {
    const checkIns = getAllCheckIns();
    const farmers = getAllFarmers();

    // Weekly stats
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const weeklyCheckIns = checkIns.filter(c => new Date(c.timestamp) >= oneWeekAgo);
    document.getElementById('weekly-checkins').textContent = weeklyCheckIns.length;

    const weeklyNewFarmers = farmers.filter(f => new Date(f.createdAt) >= oneWeekAgo);
    document.getElementById('weekly-new').textContent = weeklyNewFarmers.length;

    // Hope trend
    if (checkIns.length > 0) {
        const avgHope = checkIns.slice(0, 10).reduce((sum, c) => sum + c.hope, 0) / Math.min(checkIns.length, 10);
        document.querySelector('.trend-value').textContent = avgHope.toFixed(1);

        const oldAvg = checkIns.slice(10, 20).reduce((sum, c) => sum + c.hope, 0) / Math.min(checkIns.length - 10, 10) || avgHope;
        const arrow = document.querySelector('.trend-arrow');
        if (avgHope > oldAvg) {
            arrow.textContent = '↑';
            arrow.classList.add('up');
            arrow.classList.remove('down');
        } else if (avgHope < oldAvg) {
            arrow.textContent = '↓';
            arrow.classList.add('down');
            arrow.classList.remove('up');
        } else {
            arrow.textContent = '→';
        }
    }
}

function downloadReport(type) {
    const checkIns = getAllCheckIns();
    const farmers = getAllFarmers();
    let data, filename;

    if (type === 'all') {
        data = checkIns;
        filename = 'all_checkins.csv';
    } else if (type === 'high-risk') {
        data = checkIns.filter(c => c.riskLevel === 'HIGH' || c.riskLevel === 'CRITICAL');
        filename = 'high_risk_cases.csv';
    } else {
        data = farmers.map(f => ({
            name: f.name,
            mobile: f.mobile,
            village: f.village,
            district: f.district,
            farmSize: f.farmSize,
            registeredAt: f.createdAt
        }));
        filename = 'farmers_summary.csv';
    }

    if (data.length === 0) {
        alert('No data to export');
        return;
    }

    const headers = Object.keys(data[0]);
    const csvContent = [
        headers.join(','),
        ...data.map(row => headers.map(h => `"${row[h] || ''}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
}

// ============================================
// FARMER DETAILS
// ============================================

function viewFarmerDetail(farmerId) {
    const farmers = getAllFarmers();
    const farmer = farmers.find(f => f.id === farmerId);

    if (!farmer) return;

    const checkIns = [];
    const key = `kisan_checkins_${farmerId}`;
    const data = localStorage.getItem(key);
    if (data) checkIns.push(...JSON.parse(data));

    const modalBody = document.getElementById('farmer-modal-body');
    modalBody.innerHTML = `
        <div class="modal-header" style="border-bottom: 1px solid #eee; padding-bottom: 1rem; margin-bottom: 1rem;">
            <h3>👨‍🌾 ${farmer.name}</h3>
            <p style="color: #888;">Registered: ${new Date(farmer.createdAt).toLocaleDateString()}</p>
        </div>
        
        <div class="detail-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
            <div class="detail-item" style="background: #f5f5f5; padding: 1rem; border-radius: 8px;">
                <label style="font-size: 0.75rem; color: #888;">📱 Mobile</label>
                <span style="display: block; font-weight: 600;">${farmer.mobile}</span>
            </div>
            <div class="detail-item" style="background: #f5f5f5; padding: 1rem; border-radius: 8px;">
                <label style="font-size: 0.75rem; color: #888;">🏘️ Village</label>
                <span style="display: block; font-weight: 600;">${farmer.village || '-'}</span>
            </div>
            <div class="detail-item" style="background: #f5f5f5; padding: 1rem; border-radius: 8px;">
                <label style="font-size: 0.75rem; color: #888;">📍 District</label>
                <span style="display: block; font-weight: 600;">${capitalizeFirst(farmer.district) || '-'}</span>
            </div>
            <div class="detail-item" style="background: #f5f5f5; padding: 1rem; border-radius: 8px;">
                <label style="font-size: 0.75rem; color: #888;">🌾 Farm Size</label>
                <span style="display: block; font-weight: 600;">${farmer.farmSize || '-'} acres</span>
            </div>
            <div class="detail-item" style="background: #f5f5f5; padding: 1rem; border-radius: 8px;">
                <label style="font-size: 0.75rem; color: #888;">📋 Total Check-ins</label>
                <span style="display: block; font-weight: 600;">${checkIns.length}</span>
            </div>
            <div class="detail-item" style="background: #f5f5f5; padding: 1rem; border-radius: 8px;">
                <label style="font-size: 0.75rem; color: #888;">💪 Avg Hope</label>
                <span style="display: block; font-weight: 600;">${checkIns.length ? (checkIns.reduce((s, c) => s + c.hope, 0) / checkIns.length).toFixed(1) : '-'}/10</span>
            </div>
        </div>
        
        <h4 style="margin-bottom: 1rem;">Check-in History</h4>
        <div style="max-height: 300px; overflow-y: auto;">
            ${checkIns.length ? checkIns.slice(0, 10).map(c => `
                <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: #f9f9f9; border-radius: 6px; margin-bottom: 0.5rem; border-left: 3px solid ${getRiskColor(c.riskLevel)};">
                    <div>
                        <span style="font-weight: 500;">${new Date(c.timestamp).toLocaleDateString()}</span>
                        <span style="font-size: 0.85rem; color: #888; margin-left: 0.5rem;">${new Date(c.timestamp).toLocaleTimeString()}</span>
                    </div>
                    <div>
                        <span style="background: ${getRiskColor(c.riskLevel)}; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">${c.riskLevel}</span>
                        <span style="margin-left: 0.5rem;">Hope: ${c.hope}/10</span>
                    </div>
                </div>
            `).join('') : '<p style="color: #888; text-align: center;">No check-ins yet</p>'}
        </div>
        
        <div style="margin-top: 1.5rem; display: flex; gap: 1rem;">
            <button onclick="callFarmer('${farmer.mobile}')" style="flex: 1; padding: 0.8rem; background: #27ae60; color: white; border: none; border-radius: 8px; cursor: pointer;">
                📞 Call Farmer
            </button>
            <button onclick="closeFarmerModal()" style="flex: 1; padding: 0.8rem; background: #f0f0f0; color: #333; border: none; border-radius: 8px; cursor: pointer;">
                Close
            </button>
        </div>
    `;

    document.getElementById('farmer-modal').classList.add('active');
}

function closeFarmerModal() {
    document.getElementById('farmer-modal').classList.remove('active');
}

function callFarmer(mobile) {
    if (mobile) {
        window.open(`tel:${mobile}`, '_self');
    }
}

// ============================================
// SEARCH
// ============================================

function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length >= 2) {
            searchFarmers(query);
        }
    });
}

function searchFarmers(query) {
    const farmers = getAllFarmers();
    const results = farmers.filter(f =>
        f.name.toLowerCase().includes(query) ||
        f.mobile.includes(query) ||
        (f.village && f.village.toLowerCase().includes(query))
    );

    // Switch to farmers section and filter
    switchSection('farmers');

    const tbody = document.getElementById('farmers-tbody');
    if (results.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 2rem;">No farmers found for "${query}"</td></tr>`;
        return;
    }

    // Re-render with filtered results
    const checkIns = getAllCheckIns();
    const latestCheckIn = {};
    checkIns.forEach(c => {
        if (!latestCheckIn[c.farmerId]) latestCheckIn[c.farmerId] = c;
    });

    tbody.innerHTML = results.map(farmer => {
        const lastCheck = latestCheckIn[farmer.id];
        const lastDate = lastCheck ? getTimeAgo(new Date(lastCheck.timestamp)) : 'Never';
        const lastRisk = lastCheck ? lastCheck.riskLevel : '-';

        return `
            <tr>
                <td><strong>${farmer.name}</strong></td>
                <td>${farmer.mobile}</td>
                <td>${farmer.village || '-'}</td>
                <td>${capitalizeFirst(farmer.district) || '-'}</td>
                <td>${farmer.farmSize || '-'} acres</td>
                <td>${lastDate}</td>
                <td>${lastCheck ? `<span class="risk-badge-small ${lastRisk.toLowerCase()}">${lastRisk}</span>` : '-'}</td>
                <td><button class="action-btn" onclick="viewFarmerDetail('${farmer.id}')">View</button></td>
            </tr>
        `;
    }).join('');
}

// ============================================
// SETTINGS
// ============================================

function generateDemoData() {
    const villages = ['करंजी', 'वाडी', 'शिरपूर', 'मोहाडी', 'पिंपळगाव', 'आष्टी', 'जुन्नर', 'मंचर'];
    const talukas = ['जुन्नर', 'आंबेगाव', 'शिरूर', 'हवेली', 'मुळशी', 'वेल्हे'];
    const districts = ['pune', 'nashik', 'ahmednagar', 'satara', 'kolhapur', 'solapur', 'aurangabad', 'latur'];
    const names = ['राजेश पाटील', 'सुनील जाधव', 'विजय शिंदे', 'अमोल काळे', 'संजय माने', 'प्रकाश गायकवाड', 'महेश सूर्यवंशी', 'रवींद्र निकम'];

    const existingFarmers = getAllFarmers();
    const newFarmers = [];

    for (let i = 0; i < 5; i++) {
        const farmer = {
            id: `farmer_demo_${Date.now()}_${i}`,
            name: names[Math.floor(Math.random() * names.length)],
            mobile: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
            village: villages[Math.floor(Math.random() * villages.length)],
            taluka: talukas[Math.floor(Math.random() * talukas.length)],
            district: districts[Math.floor(Math.random() * districts.length)],
            farmSize: Math.floor(1 + Math.random() * 10),
            password: '',
            createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
            isDemo: true
        };

        newFarmers.push(farmer);

        // Generate random check-ins
        const numCheckIns = Math.floor(1 + Math.random() * 5);
        const checkIns = [];

        for (let j = 0; j < numCheckIns; j++) {
            const crops = ['excellent', 'good', 'moderate', 'poor', 'destroyed'];
            const loans = ['none', 'low', 'medium', 'high', 'severe'];
            const sleeps = ['good', 'fair', 'poor', 'very_poor'];
            const families = ['strong', 'moderate', 'weak', 'none'];

            const hope = Math.floor(1 + Math.random() * 10);
            const crop = crops[Math.floor(Math.random() * crops.length)];
            const loan = loans[Math.floor(Math.random() * loans.length)];

            // Calculate risk
            let score = 0;
            score += crops.indexOf(crop);
            score += loans.indexOf(loan);
            score += Math.max(0, 5 - Math.floor(hope / 2));

            let riskLevel = 'LOW';
            if (score >= 13) riskLevel = 'HIGH';
            else if (score >= 19) riskLevel = 'CRITICAL';
            else if (score >= 7) riskLevel = 'MODERATE';

            checkIns.push({
                timestamp: new Date(Date.now() - j * 7 * 24 * 60 * 60 * 1000 - Math.random() * 24 * 60 * 60 * 1000).toISOString(),
                crop,
                loan,
                sleep: sleeps[Math.floor(Math.random() * sleeps.length)],
                family: families[Math.floor(Math.random() * families.length)],
                hope,
                score,
                riskLevel,
                notes: ''
            });
        }

        localStorage.setItem(`kisan_checkins_${farmer.id}`, JSON.stringify(checkIns));
    }

    localStorage.setItem('kisan_farmers', JSON.stringify([...existingFarmers, ...newFarmers]));

    alert(`${newFarmers.length} demo farmers created!`);
    loadDashboardData();
}

function clearAllData() {
    if (!confirm('⚠️ WARNING: This will delete ALL farmer data and check-ins. This cannot be undone!\n\nAre you sure?')) {
        return;
    }

    if (!confirm('This is your FINAL warning. All data will be permanently deleted. Continue?')) {
        return;
    }

    // Clear all farmer-related data
    const keys = Object.keys(localStorage).filter(k => k.startsWith('kisan_'));
    keys.forEach(k => localStorage.removeItem(k));

    alert('All data cleared.');
    location.reload();
}

function exportFarmerData() {
    downloadReport('all');
}

// ============================================
// UTILITIES
// ============================================

function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);

    if (seconds < 60) return 'Just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
    return date.toLocaleDateString();
}

function capitalizeFirst(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getRiskColor(level) {
    const colors = {
        LOW: '#27ae60',
        MODERATE: '#f39c12',
        HIGH: '#e74c3c',
        CRITICAL: '#8e44ad'
    };
    return colors[level] || '#888';
}

// Expose functions globally
window.toggleSidebar = toggleSidebar;
window.viewFarmerDetail = viewFarmerDetail;
window.closeFarmerModal = closeFarmerModal;
window.callFarmer = callFarmer;
window.generateDemoData = generateDemoData;
window.clearAllData = clearAllData;
window.downloadReport = downloadReport;
window.exportFarmerData = exportFarmerData;
