/**
 * KISAN SAHAY - Farmer Mental Health Support System
 * Risk Assessment & Support Message Generator
 * Language: Marathi (Maharashtra)
 */

// ============================================
// CONFIGURATION & DATA
// ============================================

const RISK_WEIGHTS = {
    crop: { excellent: 0, good: 1, moderate: 2, poor: 3, destroyed: 5 },
    loan: { none: 0, low: 1, medium: 2, high: 4, severe: 5 },
    sleep: { good: 0, fair: 1, poor: 3, very_poor: 5 },
    family: { strong: 0, moderate: 1, weak: 3, none: 5 }
};

const RISK_LEVELS = {
    LOW: { min: 0, max: 6, label: 'LOW', labelMr: 'कमी', icon: '✅', color: 'low' },
    MODERATE: { min: 7, max: 12, label: 'MODERATE', labelMr: 'मध्यम', icon: '⚠️', color: 'moderate' },
    HIGH: { min: 13, max: 18, label: 'HIGH', labelMr: 'जास्त', icon: '🔴', color: 'high' },
    CRITICAL: { min: 19, max: 30, label: 'CRITICAL', labelMr: 'अत्यंत जास्त', icon: '🆘', color: 'critical' }
};

// Marathi Support Messages Templates
const MESSAGES = {
    LOW: {
        greeting: "नमस्कार शेतकरी बंधू/भगिनी,",
        body: `तुमची परिस्थिती सध्या स्थिर दिसते, हे ऐकून आनंद झाला! 

तुमचे पीक चांगले आहे आणि कुटुंबाचा आधार असणे ही खूप मोठी गोष्ट आहे। असाच सकारात्मक दृष्टीकोन ठेवा।

<span class="highlight">लक्षात ठेवा: शेती म्हणजे धीर आणि संयम।</span> काही अडचण आल्यास आम्ही तुमच्यासोबत आहोत।`,
        closing: "तुमचे कष्ट यशस्वी होवोत! 🌾"
    },
    MODERATE: {
        greeting: "नमस्कार शेतकरी बंधू/भगिनी,",
        body: `तुमची परिस्थिती समजते आम्हाला। काही आव्हाने असतील पण तुम्ही एकटे नाही आहात।

<span class="highlight">कुटुंबाशी मनमोकळेपणाने बोला।</span> कधीकधी दुःख वाटून घेतलं की मन हलकं होतं।

झोप पूर्ण घेण्याचा प्रयत्न करा - शरीर आणि मन दोन्हींसाठी झोप महत्त्वाची आहे। रात्री झोपण्यापूर्वी मोबाईल बाजूला ठेवा।`,
        closing: "आशा सोडू नका। एक हंगाम वाईट गेला म्हणजे सगळं संपलं नाही। 💪"
    },
    HIGH: {
        greeting: "प्रिय शेतकरी बंधू/भगिनी,",
        body: `तुमची परिस्थिती कठीण आहे हे आम्हाला समजतं। पीक खराब, कर्जाचा भार, झोप कमी - हे सगळं एकत्र आलं की मन खचतं, हे स्वाभाविक आहे।

<span class="highlight">पण तुम्ही एकटे नाही आहात।</span> तुमच्यासारख्या हजारो शेतकऱ्यांनी अशा परिस्थितीतून मार्ग काढला आहे।

<strong>कृपया जवळच्या कृषी सेवा केंद्र किंवा तालुका आरोग्य केंद्राशी संपर्क करा।</strong> तुमच्यासाठी मदत उपलब्ध आहे। खालील helpline नंबरवर कॉल करा - ते मराठीत बोलतात।`,
        closing: "तुम्ही महत्त्वाचे आहात। तुमच्या कुटुंबाला तुमची गरज आहे। 🙏"
    },
    CRITICAL: {
        greeting: "प्रिय बंधू/भगिनी,",
        body: `आम्हाला तुमची खूप काळजी वाटते। तुम्ही सध्या खूप कठीण परिस्थितीत आहात हे समजतं।

<span class="highlight">कृपया आत्ताच कोणाशीतरी बोला।</span> कुटुंबातील कोणी, मित्र, किंवा खालील helpline वर फोन करा। ते तुम्हाला समजून घेतील।

<strong>⚠️ तुमचे आयुष्य मौल्यवान आहे।</strong> या क्षणी जे वाटतंय ते कायमचं नाही। मदत घेतल्यावर परिस्थिती नक्की सुधारते।

<strong style="color: #e74c3c;">आत्ताच iCall (9152987821) वर कॉल करा - 24 तास उपलब्ध, मोफत, गोपनीय।</strong>`,
        closing: "तुम्ही एकटे नाही। आम्ही तुमच्यासोबत आहोत। 🙏❤️"
    }
};

// Practical Suggestions based on issues
const SUGGESTIONS = {
    crop_poor: {
        icon: "🌾",
        title: "पीक नुकसान भरपाई",
        desc: "तालुक्याच्या कृषी अधिकाऱ्यांना भेटा। PMFBY (पीक विमा) claim करा। नुकसान पंचनामा करून घ्या।"
    },
    loan_high: {
        icon: "💰",
        title: "कर्ज पुनर्गठन",
        desc: "बँकेत कर्ज restructuring साठी अर्ज करा। मुख्यमंत्री शेतकरी सन्मान योजनेची माहिती घ्या।"
    },
    sleep_poor: {
        icon: "😴",
        title: "झोप सुधारण्यासाठी",
        desc: "रात्री फोन बाजूला ठेवा। कोमट पाणी प्या। मोठा श्वास घेऊन मन शांत करा।"
    },
    family_weak: {
        icon: "👨‍👩‍👧‍👦",
        title: "कुटुंब संवाद",
        desc: "दिवसातून एकदा कुटुंबासोबत जेवण करा। समस्या एकट्याने सोडवण्याचा प्रयत्न करू नका।"
    },
    hope_low: {
        icon: "💪",
        title: "मानसिक आधार",
        desc: "iCall helpline वर मराठीत बोलता येतं (9152987821)। गावातील शेतकरी गटाशी संपर्क करा।"
    },
    agriculture: {
        icon: "🌱",
        title: "पुढील हंगाम नियोजन",
        desc: "कमी पाण्याची पिके (तूर, हरभरा) विचारात घ्या। कृषी विद्यापीठाच्या मोफत सल्ला सेवेचा वापर करा।"
    },
    government: {
        icon: "🏛️",
        title: "सरकारी योजना",
        desc: "तलाठी कार्यालयात भेटा। PM-KISAN, नमो शेतकरी योजना यांची माहिती घ्या।"
    }
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    checkAuthentication();
    initializeForm();
    initializeRangeSlider();
    displayUserInfo();
});

// Check if user is logged in
function checkAuthentication() {
    const session = window.KisanAuth ? window.KisanAuth.getSession() : null;
    const userMenu = document.getElementById('user-menu');
    const loginBtn = document.getElementById('login-btn');

    if (!session) {
        // User not logged in
        if (userMenu) userMenu.classList.add('hidden');
        if (loginBtn) loginBtn.classList.remove('hidden'); // Show login button

        console.log('User not logged in. For full experience, please login first.');
        return false;
    }

    // User is logged in
    if (userMenu) userMenu.classList.remove('hidden');
    if (loginBtn) loginBtn.classList.add('hidden'); // Hide login button

    return true;
}

// Display logged-in user info
function displayUserInfo() {
    const session = window.KisanAuth ? window.KisanAuth.getSession() : null;
    const userNameEl = document.getElementById('user-name');

    if (session && userNameEl) {
        userNameEl.textContent = session.name || 'शेतकरी';
    }
}

// Handle logout
function handleLogout() {
    if (window.KisanAuth) {
        window.KisanAuth.clearSession();
    }

    // Show logout message
    alert('तुम्ही यशस्वीपणे लॉगआउट झालात! (You have been logged out successfully!)');

    // Redirect to login page
    window.location.href = 'login.html';
}

// Expose logout globally
window.handleLogout = handleLogout;

function initializeForm() {
    const form = document.getElementById('farmer-form');
    form.addEventListener('submit', handleFormSubmit);
}

function initializeRangeSlider() {
    const rangeInput = document.getElementById('hope');
    const valueDisplay = document.getElementById('hope-value');

    rangeInput.addEventListener('input', (e) => {
        valueDisplay.textContent = e.target.value;
        updateSliderColor(e.target);
    });

    // Initial color
    updateSliderColor(rangeInput);
}

function updateSliderColor(slider) {
    const value = parseInt(slider.value);
    const valueDisplay = document.getElementById('hope-value');

    if (value <= 3) {
        valueDisplay.style.color = '#e74c3c';
        valueDisplay.style.background = 'rgba(231, 76, 60, 0.1)';
    } else if (value <= 6) {
        valueDisplay.style.color = '#f39c12';
        valueDisplay.style.background = 'rgba(243, 156, 18, 0.1)';
    } else {
        valueDisplay.style.color = '#27ae60';
        valueDisplay.style.background = 'rgba(39, 174, 96, 0.1)';
    }
}

// ============================================
// FORM HANDLING
// ============================================

async function handleFormSubmit(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submit-btn');
    submitBtn.classList.add('loading');

    // Gather form data
    const formData = {
        crop: document.getElementById('crop').value,
        loan: document.getElementById('loan').value,
        sleep: document.getElementById('sleep').value,
        family: document.getElementById('family').value,
        hope: parseInt(document.getElementById('hope').value),
        notes: document.getElementById('notes').value
    };

    // Simulate processing time for better UX
    await delay(1000);

    // Assess risk and generate response
    const assessment = assessRisk(formData);
    const response = generateResponse(formData, assessment);

    // Display results
    displayResults(assessment, response, formData);

    // Save to check-in history
    saveCheckInToHistory(formData, assessment);

    submitBtn.classList.remove('loading');
}

// Save check-in to history
function saveCheckInToHistory(formData, assessment) {
    const session = window.KisanAuth ? window.KisanAuth.getSession() : null;
    if (!session) return;

    const checkIn = {
        timestamp: new Date().toISOString(),
        crop: formData.crop,
        loan: formData.loan,
        sleep: formData.sleep,
        family: formData.family,
        hope: formData.hope,
        notes: formData.notes,
        score: assessment.totalScore,
        riskLevel: assessment.riskLevel.label
    };

    // Get existing check-ins
    const key = `kisan_checkins_${session.farmerId}`;
    const existing = localStorage.getItem(key);
    const checkIns = existing ? JSON.parse(existing) : [];

    // Add new check-in at the beginning
    checkIns.unshift(checkIn);

    // Save back to localStorage
    localStorage.setItem(key, JSON.stringify(checkIns));

    console.log('Check-in saved:', checkIn);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ============================================
// RISK ASSESSMENT
// ============================================

function assessRisk(data) {
    let totalScore = 0;
    const factors = {};

    // Calculate weighted scores
    factors.crop = RISK_WEIGHTS.crop[data.crop] || 0;
    factors.loan = RISK_WEIGHTS.loan[data.loan] || 0;
    factors.sleep = RISK_WEIGHTS.sleep[data.sleep] || 0;
    factors.family = RISK_WEIGHTS.family[data.family] || 0;

    // Hope level inverse scoring (low hope = high risk)
    factors.hope = Math.max(0, 5 - Math.floor(data.hope / 2));

    // Calculate total
    totalScore = Object.values(factors).reduce((a, b) => a + b, 0);

    // Determine risk level
    let riskLevel = RISK_LEVELS.LOW;
    for (const [key, level] of Object.entries(RISK_LEVELS)) {
        if (totalScore >= level.min && totalScore <= level.max) {
            riskLevel = level;
            break;
        }
    }

    return {
        totalScore,
        factors,
        riskLevel,
        criticalFactors: identifyCriticalFactors(data, factors)
    };
}

function identifyCriticalFactors(data, factors) {
    const critical = [];

    if (data.crop === 'poor' || data.crop === 'destroyed') {
        critical.push('crop_poor');
    }
    if (data.loan === 'high' || data.loan === 'severe') {
        critical.push('loan_high');
    }
    if (data.sleep === 'poor' || data.sleep === 'very_poor') {
        critical.push('sleep_poor');
    }
    if (data.family === 'weak' || data.family === 'none') {
        critical.push('family_weak');
    }
    if (data.hope <= 4) {
        critical.push('hope_low');
    }

    return critical;
}

// ============================================
// RESPONSE GENERATION
// ============================================

function generateResponse(data, assessment) {
    const levelKey = assessment.riskLevel.label;
    const messageTemplate = MESSAGES[levelKey];

    // Get relevant suggestions
    const suggestions = generateSuggestions(assessment.criticalFactors, assessment.riskLevel);

    return {
        message: messageTemplate,
        suggestions,
        showEmergency: levelKey === 'HIGH' || levelKey === 'CRITICAL'
    };
}

function generateSuggestions(criticalFactors, riskLevel) {
    const suggestions = [];

    // Add suggestions based on critical factors
    criticalFactors.forEach(factor => {
        if (SUGGESTIONS[factor]) {
            suggestions.push(SUGGESTIONS[factor]);
        }
    });

    // Add general suggestions if needed
    if (suggestions.length < 2) {
        suggestions.push(SUGGESTIONS.agriculture);
    }
    if (riskLevel.label !== 'LOW' && suggestions.length < 3) {
        suggestions.push(SUGGESTIONS.government);
    }

    return suggestions.slice(0, 4); // Max 4 suggestions
}

// ============================================
// DISPLAY RESULTS
// ============================================

function displayResults(assessment, response, formData) {
    const resultsSection = document.getElementById('results-section');
    const riskIndicator = document.getElementById('risk-indicator');
    const riskIcon = document.getElementById('risk-icon');
    const riskBadge = document.getElementById('risk-badge');
    const supportMessage = document.getElementById('support-message');
    const suggestionsList = document.getElementById('suggestions-list');
    const emergencyCard = document.getElementById('emergency-card');

    // Update risk indicator
    riskIndicator.className = `risk-indicator ${assessment.riskLevel.color}`;
    riskIcon.textContent = assessment.riskLevel.icon;
    riskBadge.textContent = `${assessment.riskLevel.label} (${assessment.riskLevel.labelMr})`;
    riskBadge.className = `risk-badge ${assessment.riskLevel.color}`;

    // Update support message
    const msg = response.message;
    supportMessage.innerHTML = `
        <p class="greeting">${msg.greeting}</p>
        <p>${msg.body}</p>
        <p><strong>${msg.closing}</strong></p>
    `;

    // Update suggestions
    suggestionsList.innerHTML = response.suggestions.map(s => `
        <div class="suggestion-item">
            <span class="suggestion-icon">${s.icon}</span>
            <div class="suggestion-content">
                <h4>${s.title}</h4>
                <p>${s.desc}</p>
            </div>
        </div>
    `).join('');

    // Show/hide emergency contacts
    emergencyCard.style.display = response.showEmergency ? 'block' : 'none';

    // Show results section
    resultsSection.classList.remove('hidden');

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Log for analytics (in production, send to backend)
    console.log('Assessment:', {
        timestamp: new Date().toISOString(),
        riskLevel: assessment.riskLevel.label,
        score: assessment.totalScore,
        factors: assessment.factors,
        criticalFactors: assessment.criticalFactors
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function resetForm() {
    document.getElementById('farmer-form').reset();
    document.getElementById('hope-value').textContent = '5';
    document.getElementById('results-section').classList.add('hidden');

    // Scroll to form
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });

    // Reset slider color
    const rangeInput = document.getElementById('hope');
    rangeInput.value = 5;
    updateSliderColor(rangeInput);
}

function printResults() {
    window.print();
}

// Expose functions globally
window.resetForm = resetForm;
window.printResults = printResults;
