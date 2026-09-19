// =========================================================
// CENTRAL TRANSLATION DICTIONARY
// English (default) + Tamil
// Usage:  t("nav.dashboard")
// =========================================================

export const translations = {
  en: {
    nav: {
      brand: "Chennai FloodWatch",
      subtitle: "Urban Flood Nowcasting",
      dashboard: "Dashboard",
      map: "Live Map",
      alerts: "Alerts",
      authority: "Authority",
      simulationOnline: "Simulation Online",
      openMenu: "Open navigation menu",
      language: "Language",
    },

    risk: {
      LOW: "Low",
      MODERATE: "Moderate",
      HIGH: "High",
      CRITICAL: "Critical",
      LOW_UPPER: "LOW",
      MODERATE_UPPER: "MODERATE",
      HIGH_UPPER: "HIGH",
      CRITICAL_UPPER: "CRITICAL",
    },

    common: {
      location: "Velachery, Chennai, Tamil Nadu",
      simulationMode: "SIMULATION MODE",
      demoMonitoringMode: "DEMO MONITORING MODE",
      demoSystem: "DEMO SYSTEM",
      updatedNow: "Updated: Just now",
      floodRisk: "Flood Risk",
      rainfall: "Rainfall",
      drainage: "Drainage",
      locations: "Locations",
      next3Hours: "Next 3 Hours",
      window03: "0–3 Hours",
      of: "of",
      unitMmHr: "mm/hr",
      systemOnline: "System Online",
      simulationData: "Simulation Data",
    },

    dashboard: {
      title: "Urban Flood Nowcasting",
      subtitle:
        "Monitor rainfall, drainage capacity and predicted flood risk across Velachery.",
      currentRisk: "Current Flood Risk",
      riskDescLow:
        "Rainfall and drainage utilization are within normal simulated limits.",
      riskDescModerate:
        "Rainfall is raising drainage utilization in parts of Velachery.",
      riskDescHigh:
        "Increased rainfall and drainage utilization detected.",
      riskDescCritical:
        "Drainage capacity is nearly exhausted at several monitoring points.",
      statRainfall: "Rainfall Intensity",
      statRainfallNote: "Current simulation input",
      statDrainage: "Drainage Utilization",
      statDrainageNote: "Maximum simulated utilization",
      statPoints: "High / Critical Points",
      statPointsNote: "Out of 50 monitoring points",
      statStatus: "System Status",
      statStatusValue: "Online",
      statStatusNote: "Simulation services operational",
      nowcastTitle: "Flood Nowcast",
      nowcastSubtitle:
        "Expected flood-risk progression over the next three hours.",
      howTitle: "How the System Works",
      howSubtitle:
        "Flood risk is estimated using rainfall and drainage utilization.",
      step1: "Rainfall",
      step1Text: "Rainfall intensity is provided as the simulation input.",
      step2: "Drainage",
      step2Text:
        "Drainage utilization changes according to rainfall and pipe capacity.",
      step3: "Flood Risk",
      step3Text: "The system calculates a flood-risk score from 0 to 100.",
      ctaTitle: "Explore Velachery Flood Map",
      ctaText:
        "View drainage points, flood-risk zones, rainfall and nowcast information.",
      ctaButton: "Open Live Map",
    },

    nowcast: {
      now: "NOW",
      h1: "+1 HOUR",
      h2: "+2 HOURS",
      h3: "+3 HOURS",
      drainageSuffix: "drainage",
    },

    mapPage: {
      title: "Velachery Flood Risk Map",
      subtitle:
        "Simulate rainfall and monitor changing flood risk across the Velachery drainage network.",
      statInput: "Simulation Input",
      statInputNote: "Adjust below",
      statLevels: "Risk Visualization",
      statLevelsValue: "4 Levels",
      statLevelsNote: "Low → Critical",
      statArea: "Study Area",
      statAreaValue: "Velachery",
      statAreaNote: "Chennai",
      statPoints: "Monitoring Points",
      statPointsNote: "Simulated drainage points",
      sectionTitle: "Velachery Urban Flood Monitoring",
      sectionSubtitle:
        "Rainfall + drainage capacity + flood-risk simulation.",
      interactive: "Interactive Simulation",
    },

    map: {
      currentStatus: "CURRENT STATUS",
      currentRainfall: "Current Rainfall",
      peakDrainage: "Peak Drainage",
      simulationTag: "SIMULATION",
      riskDistributionTag: "RISK DISTRIBUTION",
      riskDistribution: "Flood Risk Distribution",
      riskDistributionSub:
        "Risk across 50 simulated drainage monitoring points.",
      maxUtilization: "Maximum Drainage Utilization",
      monitoringPoints: "Monitoring Points",
      demoWarning:
        "DEMO / SIMULATION DATA — Coordinates, drainage capacities and risk values are approximate project data.",
      nowcastTag: "NOWCAST",
      nowcastTitle: "0–3 Hour Flood Nowcast",
      nowcastSub:
        "Expected change in flood risk if rainfall continues to increase.",
      rainfallTrend: "Rainfall Trend",
      increasing: "Increasing",
      drainageStress: "Drainage Stress",
      chartTitle: "Rainfall Forecast Trend",
      chartSub: "Simulated rainfall intensity over the next 3 hours.",
      controlTag: "RAINFALL CONTROL",
      controlTitle: "Rainfall Simulation",
      controlSub:
        "Adjust rainfall and observe how different drainage pipe sizes respond.",
      reset: "Reset",
      resetTitle: "Reset rainfall",
      rainfallInputLabel: "Rainfall intensity in millimetres per hour",
      rainfallSliderLabel: "Rainfall intensity slider",
      mapTag: "MAP",
      mapTitle: "Velachery Live Flood Map",
      mapSub: "Dynamic drainage and flood-risk visualization.",
      simulationActive: "Simulation Active",
      rainfallPoint: "Rainfall Monitoring Point",
      simulationRainfall: "Simulation Rainfall:",
      projectData: "Project demonstration data",
      drainageMonitoring: "Drainage Monitoring",
      overflowWarning: "Overflow warning",
      legendPipe: "Pipe Size",
      boundary: "Velachery Boundary",
      rainfallPointShort: "Rainfall Point",
      drainagePointShort: "Drainage Point",
      legendDemo: "Approximate simulation data",
      currentFloodStatus: "CURRENT FLOOD STATUS",
      whyTag: "WHY THE RISK CHANGES",
      whyTitle: "Why is the risk changing?",
      whySub: "Main factors influencing the simulated flood-risk score.",
      factorRainfall: "Rainfall Intensity",
      factorRainfallText: "Higher rainfall increases the water load.",
      factorDrainage: "Drainage Utilization",
      factorDrainageText:
        "Higher utilization means less remaining drainage capacity.",
      factorPipe: "Pipe Capacity",
      factorPipeText: "Smaller pipes reach high utilization faster.",
      criticalLocations: "Critical Locations",
      criticalLocationsText: "Locations requiring highest attention",
      topRiskTag: "TOP RISK LOCATIONS",
      topRiskTitle: "Top Risk Locations",
      topRiskSub:
        "Locations with the highest simulated drainage utilization.",
      utilization: "utilization",
    },

    popup: {
      road: "Road:",
      pipe: "Pipe:",
      capacity: "Capacity:",
      rainfall: "Rainfall:",
      utilization: "Utilization:",
      remaining: "Remaining:",
      risk: "Risk:",
      score: "Score:",
    },

    pipes: {
      small: "Small",
      medium: "Medium",
      large: "Large",
      smallNote: "Lower capacity",
      mediumNote: "Medium capacity",
      largeNote: "Higher capacity",
      explain:
        "Different pipe capacities respond differently to the same rainfall intensity.",
    },

    alerts: {
      title: "Flood Alert System",
      subtitle: "Simulated flood-risk information for Velachery residents.",
      currentRisk: "CURRENT FLOOD RISK",
      currentAlerts: "Current Alerts",
      currentAlertsSub: "Active simulated alerts for Velachery.",
      noAlerts: "No active alerts. Simulated risk is currently low.",
      reason: "Reason",
      reasonHigh: "Drainage utilization increased above threshold.",
      reasonCritical:
        "Drainage capacity nearly exhausted at this monitoring point.",
      reasonModerate: "Drainage utilization is rising with rainfall.",
      highRiskLocations: "High-Risk Locations",
      criticalLocations: "Critical Locations",
      recentChanges: "Recent Risk Changes",
      time: "Time",
      publicTitle: "Public Information",
      whatTitle: "What is happening?",
      whatText:
        "Simulated rainfall over Velachery is filling the local drainage network.",
      whereTitle: "Where?",
      whereText:
        "Velachery and nearby corridors in southern Chennai, Tamil Nadu.",
      whyTitle: "Why?",
      whyText:
        "When rainfall is higher than drainage capacity, water stays on roads.",
      whatNowTitle: "What should you know?",
      whatNowText:
        "This is a demonstration system. For real warnings, always follow Greater Chennai Corporation and TNSDMA announcements.",
      stressLabel: "Drainage Stress",
      windowLabel: "Forecast Window",
      windowNote: "Short-term nowcast",
    },

    authority: {
      title: "Authority Dashboard",
      subtitle:
        "Operational overview of simulated drainage stress across Velachery.",
      statusOnline: "Monitoring Active",
      priorityAlert: "PRIORITY ALERT",
      statRainfall: "Rainfall Input",
      statRainfallNote: "Simulation input",
      statStress: "Highest Drainage Stress",
      statStressNote: "Peak simulated utilization",
      statCritical: "Critical Points",
      statCriticalNote: "Out of 50 monitoring points",
      statWindow: "Forecast Window",
      statWindowNote: "Short-term nowcast",
      priorityTitle: "Priority Monitoring Points",
      prioritySub: "Highest simulated drainage stress in Velachery.",
      colId: "ID",
      colArea: "LOCATION",
      colPipe: "PIPE",
      colDrainage: "DRAINAGE",
      colRisk: "RISK",
      colAction: "SUGGESTED ATTENTION",
      actionCritical: "Inspect drain and clear blockage",
      actionHigh: "Deploy monitoring team",
      actionModerate: "Continue routine observation",
      actionLow: "No action required",
      responseTitle: "Response Information",
      responseSub: "Reference information only — this is a demo system.",
      response1: "Priority Corridors",
      response1Text:
        "Corridors with small pipes reach high utilization first and need earlier inspection.",
      response2: "Drainage Monitoring",
      response2Text:
        "Track utilization above 85% — remaining capacity becomes very small.",
      response3: "Continuous Monitoring",
      response3Text:
        "Risk levels update whenever the simulated rainfall input changes.",
      zonesCount: "monitoring points",
    },

    disclaimer: {
      title: "DEMO / SIMULATION DATA",
      text: "This system is developed for academic/project demonstration and is not an official emergency warning system.",
    },
  },

  ta: {
    nav: {
      brand: "சென்னை ஃப்ளட்வாட்ச்",
      subtitle: "நகர்ப்புற வெள்ள முன்னறிவிப்பு",
      dashboard: "டாஷ்போர்டு",
      map: "நேரடி வரைபடம்",
      alerts: "எச்சரிக்கைகள்",
      authority: "அதிகாரிகள்",
      simulationOnline: "மாதிரி இயக்கத்தில்",
      openMenu: "வழிசெலுத்தல் பட்டியலைத் திற",
      language: "மொழி",
    },

    risk: {
      LOW: "குறைவு",
      MODERATE: "மிதமான",
      HIGH: "அதிகம்",
      CRITICAL: "மிகவும் ஆபத்தானது",
      LOW_UPPER: "குறைவு",
      MODERATE_UPPER: "மிதமான",
      HIGH_UPPER: "அதிகம்",
      CRITICAL_UPPER: "மிகவும் ஆபத்தானது",
    },

    common: {
      location: "வேளச்சேரி, சென்னை, தமிழ்நாடு",
      simulationMode: "மாதிரி நிலை",
      demoMonitoringMode: "மாதிரி கண்காணிப்பு நிலை",
      demoSystem: "மாதிரி அமைப்பு",
      updatedNow: "புதுப்பிக்கப்பட்டது: இப்போது",
      floodRisk: "வெள்ள அபாயம்",
      rainfall: "மழைப்பொழிவு",
      drainage: "வடிகால்",
      locations: "இடங்கள்",
      next3Hours: "அடுத்த 3 மணி நேரம்",
      window03: "0–3 மணி நேரம்",
      of: "இல்",
      unitMmHr: "மிமீ/மணி",
      systemOnline: "கணினி செயல்பாட்டில் உள்ளது",
      simulationData: "மாதிரி தரவு",
    },

    dashboard: {
      title: "நகர்ப்புற வெள்ள முன்னறிவிப்பு",
      subtitle:
        "வேளச்சேரியில் மழைப்பொழிவு, வடிகால் திறன் மற்றும் எதிர்பார்க்கப்படும் வெள்ள அபாயத்தைக் கண்காணிக்கவும்.",
      currentRisk: "தற்போதைய வெள்ள அபாயம்",
      riskDescLow:
        "மழைப்பொழிவும் வடிகால் பயன்பாடும் இயல்பான அளவில் உள்ளன.",
      riskDescModerate:
        "மழையால் வேளச்சேரியின் சில பகுதிகளில் வடிகால் பயன்பாடு அதிகரிக்கிறது.",
      riskDescHigh:
        "மழைப்பொழிவும் வடிகால் பயன்பாடும் அதிகரித்துள்ளதாகக் கண்டறியப்பட்டுள்ளது.",
      riskDescCritical:
        "பல கண்காணிப்பு இடங்களில் வடிகால் திறன் கிட்டத்தட்ட முழுமையாக நிரம்பிவிட்டது.",
      statRainfall: "மழைப்பொழிவு தீவிரம்",
      statRainfallNote: "தற்போதைய மாதிரி உள்ளீடு",
      statDrainage: "வடிகால் பயன்பாடு",
      statDrainageNote: "அதிகபட்ச மாதிரி பயன்பாடு",
      statPoints: "அதிக / ஆபத்தான இடங்கள்",
      statPointsNote: "மொத்தம் 50 கண்காணிப்பு இடங்களில்",
      statStatus: "கணினி நிலை",
      statStatusValue: "செயல்பாட்டில்",
      statStatusNote: "மாதிரி சேவைகள் இயங்குகின்றன",
      nowcastTitle: "வெள்ள முன்னறிவிப்பு",
      nowcastSubtitle:
        "அடுத்த மூன்று மணி நேரத்தில் எதிர்பார்க்கப்படும் வெள்ள அபாய மாற்றம்.",
      howTitle: "இந்த அமைப்பு எப்படி வேலை செய்கிறது",
      howSubtitle:
        "மழைப்பொழிவு மற்றும் வடிகால் பயன்பாட்டைக் கொண்டு வெள்ள அபாயம் கணக்கிடப்படுகிறது.",
      step1: "மழைப்பொழிவு",
      step1Text: "மழைப்பொழிவு தீவிரம் மாதிரி உள்ளீடாக வழங்கப்படுகிறது.",
      step2: "வடிகால்",
      step2Text:
        "மழை மற்றும் குழாய் திறனுக்கு ஏற்ப வடிகால் பயன்பாடு மாறுகிறது.",
      step3: "வெள்ள அபாயம்",
      step3Text: "அமைப்பு 0 முதல் 100 வரை ஒரு அபாய மதிப்பெண்ணைக் கணக்கிடுகிறது.",
      ctaTitle: "வேளச்சேரி வெள்ள வரைபடத்தைப் பார்க்கவும்",
      ctaText:
        "வடிகால் இடங்கள், அபாயப் பகுதிகள், மழை மற்றும் முன்னறிவிப்புத் தகவல்களைப் பாருங்கள்.",
      ctaButton: "நேரடி வரைபடத்தைத் திற",
    },

    nowcast: {
      now: "இப்போது",
      h1: "+1 மணி",
      h2: "+2 மணி",
      h3: "+3 மணி",
      drainageSuffix: "வடிகால்",
    },

    mapPage: {
      title: "வேளச்சேரி வெள்ள அபாய வரைபடம்",
      subtitle:
        "மழையை மாற்றி வேளச்சேரி வடிகால் வலையமைப்பில் அபாயம் மாறுவதைக் கவனியுங்கள்.",
      statInput: "மாதிரி உள்ளீடு",
      statInputNote: "கீழே மாற்றவும்",
      statLevels: "அபாயக் காட்சி",
      statLevelsValue: "4 நிலைகள்",
      statLevelsNote: "குறைவு → ஆபத்தானது",
      statArea: "ஆய்வுப் பகுதி",
      statAreaValue: "வேளச்சேரி",
      statAreaNote: "சென்னை",
      statPoints: "கண்காணிப்பு இடங்கள்",
      statPointsNote: "மாதிரி வடிகால் இடங்கள்",
      sectionTitle: "வேளச்சேரி நகர்ப்புற வெள்ளக் கண்காணிப்பு",
      sectionSubtitle: "மழை + வடிகால் திறன் + வெள்ள அபாய மாதிரி.",
      interactive: "ஊடாடும் மாதிரி",
    },

    map: {
      currentStatus: "தற்போதைய நிலை",
      currentRainfall: "தற்போதைய மழைப்பொழிவு",
      peakDrainage: "அதிகபட்ச வடிகால் பயன்பாடு",
      simulationTag: "மாதிரி",
      riskDistributionTag: "அபாயப் பகிர்வு",
      riskDistribution: "வெள்ள அபாயப் பகிர்வு",
      riskDistributionSub:
        "50 மாதிரி வடிகால் கண்காணிப்பு இடங்களில் உள்ள அபாயம்.",
      maxUtilization: "அதிகபட்ச வடிகால் பயன்பாடு",
      monitoringPoints: "கண்காணிப்பு இடங்கள்",
      demoWarning:
        "மாதிரி / சோதனை தரவு — இட அமைவுகள், வடிகால் திறன் மற்றும் அபாய மதிப்புகள் தோராயமான திட்டத் தரவுகள்.",
      nowcastTag: "முன்னறிவிப்பு",
      nowcastTitle: "0–3 மணி நேர வெள்ள முன்னறிவிப்பு",
      nowcastSub:
        "மழை தொடர்ந்து அதிகரித்தால் வெள்ள அபாயம் எவ்வாறு மாறும் என்பது.",
      rainfallTrend: "மழைப் போக்கு",
      increasing: "அதிகரிக்கிறது",
      drainageStress: "வடிகால் அழுத்தம்",
      chartTitle: "மழைப்பொழிவு முன்னறிவிப்பு வரைபடம்",
      chartSub: "அடுத்த 3 மணி நேரத்திற்கான மாதிரி மழைத் தீவிரம்.",
      controlTag: "மழை கட்டுப்பாடு",
      controlTitle: "மழைப்பொழிவு மாதிரி",
      controlSub:
        "மழையை மாற்றி, வெவ்வேறு வடிகால் குழாய் அளவுகள் எப்படிச் செயல்படுகின்றன என்பதைப் பாருங்கள்.",
      reset: "மீட்டமை",
      resetTitle: "மழையை மீட்டமைக்கவும்",
      rainfallInputLabel: "மழைத் தீவிரம் (மிமீ/மணி)",
      rainfallSliderLabel: "மழைத் தீவிரம் ஸ்லைடர்",
      mapTag: "வரைபடம்",
      mapTitle: "வேளச்சேரி நேரடி வெள்ள வரைபடம்",
      mapSub: "வடிகால் மற்றும் வெள்ள அபாயத்தின் நேரடிக் காட்சி.",
      simulationActive: "மாதிரி இயக்கத்தில்",
      rainfallPoint: "மழைக் கண்காணிப்பு இடம்",
      simulationRainfall: "மாதிரி மழைப்பொழிவு:",
      projectData: "திட்ட விளக்கத் தரவு",
      drainageMonitoring: "வடிகால் கண்காணிப்பு",
      overflowWarning: "நிரம்பி வழியும் அபாயம்",
      legendPipe: "குழாய் அளவு",
      boundary: "வேளச்சேரி எல்லை",
      rainfallPointShort: "மழை இடம்",
      drainagePointShort: "வடிகால் இடம்",
      legendDemo: "தோராயமான மாதிரி தரவு",
      currentFloodStatus: "தற்போதைய வெள்ள நிலை",
      whyTag: "அபாயம் ஏன் மாறுகிறது",
      whyTitle: "அபாயம் ஏன் மாறுகிறது?",
      whySub: "வெள்ள அபாய மதிப்பெண்ணைப் பாதிக்கும் முக்கிய காரணிகள்.",
      factorRainfall: "மழைப்பொழிவு தீவிரம்",
      factorRainfallText: "மழை அதிகரிக்கும்போது நீரின் அளவு கூடுகிறது.",
      factorDrainage: "வடிகால் பயன்பாடு",
      factorDrainageText:
        "பயன்பாடு அதிகமானால் மீதமுள்ள வடிகால் திறன் குறைகிறது.",
      factorPipe: "குழாய் திறன்",
      factorPipeText:
        "சிறிய குழாய்கள் விரைவாகவே அதிக பயன்பாட்டை அடைந்துவிடும்.",
      criticalLocations: "ஆபத்தான இடங்கள்",
      criticalLocationsText: "அதிக கவனம் தேவைப்படும் இடங்கள்",
      topRiskTag: "அதிக அபாய இடங்கள்",
      topRiskTitle: "அதிக அபாயமுள்ள இடங்கள்",
      topRiskSub: "அதிக மாதிரி வடிகால் பயன்பாடு உள்ள இடங்கள்.",
      utilization: "பயன்பாடு",
    },

    popup: {
      road: "சாலை:",
      pipe: "குழாய்:",
      capacity: "திறன்:",
      rainfall: "மழை:",
      utilization: "பயன்பாடு:",
      remaining: "மீதம்:",
      risk: "அபாயம்:",
      score: "மதிப்பெண்:",
    },

    pipes: {
      small: "சிறியது",
      medium: "நடுத்தரம்",
      large: "பெரியது",
      smallNote: "குறைந்த திறன்",
      mediumNote: "நடுத்தரத் திறன்",
      largeNote: "அதிகத் திறன்",
      explain:
        "ஒரே மழைத் தீவிரத்திற்கு வெவ்வேறு குழாய் திறன்கள் வெவ்வேறு விதமாகச் செயல்படுகின்றன.",
    },

    alerts: {
      title: "வெள்ள எச்சரிக்கை அமைப்பு",
      subtitle: "வேளச்சேரி மக்களுக்கான மாதிரி வெள்ள அபாயத் தகவல்.",
      currentRisk: "தற்போதைய வெள்ள அபாயம்",
      currentAlerts: "தற்போதைய எச்சரிக்கைகள்",
      currentAlertsSub: "வேளச்சேரிக்கான செயலில் உள்ள மாதிரி எச்சரிக்கைகள்.",
      noAlerts: "எச்சரிக்கைகள் எதுவும் இல்லை. தற்போது அபாயம் குறைவாக உள்ளது.",
      reason: "காரணம்",
      reasonHigh: "வடிகால் பயன்பாடு வரம்பை மீறி அதிகரித்துள்ளது.",
      reasonCritical:
        "இந்தக் கண்காணிப்பு இடத்தில் வடிகால் திறன் கிட்டத்தட்ட நிரம்பிவிட்டது.",
      reasonModerate: "மழையுடன் சேர்ந்து வடிகால் பயன்பாடு உயர்கிறது.",
      highRiskLocations: "அதிக அபாய இடங்கள்",
      criticalLocations: "ஆபத்தான இடங்கள்",
      recentChanges: "சமீபத்திய அபாய மாற்றங்கள்",
      time: "நேரம்",
      publicTitle: "பொதுமக்கள் தகவல்",
      whatTitle: "என்ன நடக்கிறது?",
      whatText:
        "வேளச்சேரி மீது பெய்யும் மாதிரி மழை உள்ளூர் வடிகால் வலையமைப்பை நிரப்புகிறது.",
      whereTitle: "எங்கே?",
      whereText: "தென் சென்னையில் வேளச்சேரி மற்றும் அருகிலுள்ள பகுதிகள்.",
      whyTitle: "ஏன்?",
      whyText:
        "மழை வடிகால் திறனைவிட அதிகமாக இருக்கும்போது சாலைகளில் தண்ணீர் தேங்குகிறது.",
      whatNowTitle: "நீங்கள் தெரிந்து கொள்ள வேண்டியது",
      whatNowText:
        "இது ஒரு மாதிரி அமைப்பு. உண்மையான எச்சரிக்கைகளுக்கு சென்னை மாநகராட்சி மற்றும் TNSDMA அறிவிப்புகளையே பின்பற்றவும்.",
      stressLabel: "வடிகால் அழுத்தம்",
      windowLabel: "முன்னறிவிப்பு கால அளவு",
      windowNote: "குறுகிய கால முன்னறிவிப்பு",
    },

    authority: {
      title: "அதிகாரிகள் டாஷ்போர்டு",
      subtitle:
        "வேளச்சேரியில் மாதிரி வடிகால் அழுத்தத்தின் செயல்பாட்டுக் கண்ணோட்டம்.",
      statusOnline: "கண்காணிப்பு செயலில்",
      priorityAlert: "முன்னுரிமை எச்சரிக்கை",
      statRainfall: "மழை உள்ளீடு",
      statRainfallNote: "மாதிரி உள்ளீடு",
      statStress: "அதிகபட்ச வடிகால் அழுத்தம்",
      statStressNote: "உச்ச மாதிரி பயன்பாடு",
      statCritical: "ஆபத்தான இடங்கள்",
      statCriticalNote: "மொத்தம் 50 கண்காணிப்பு இடங்களில்",
      statWindow: "முன்னறிவிப்பு கால அளவு",
      statWindowNote: "குறுகிய கால முன்னறிவிப்பு",
      priorityTitle: "முன்னுரிமை கண்காணிப்பு இடங்கள்",
      prioritySub: "வேளச்சேரியில் அதிக மாதிரி வடிகால் அழுத்தம் உள்ள இடங்கள்.",
      colId: "எண்",
      colArea: "இடம்",
      colPipe: "குழாய்",
      colDrainage: "வடிகால்",
      colRisk: "அபாயம்",
      colAction: "பரிந்துரைக்கப்பட்ட கவனம்",
      actionCritical: "வடிகாலைப் பரிசோதித்து அடைப்பை நீக்கவும்",
      actionHigh: "கண்காணிப்புக் குழுவை அனுப்பவும்",
      actionModerate: "வழக்கமான கண்காணிப்பைத் தொடரவும்",
      actionLow: "நடவடிக்கை தேவையில்லை",
      responseTitle: "பதில் நடவடிக்கைத் தகவல்",
      responseSub: "இது ஒரு மாதிரி அமைப்பு — தகவல் மட்டுமே.",
      response1: "முன்னுரிமை வழித்தடங்கள்",
      response1Text:
        "சிறிய குழாய்கள் உள்ள வழித்தடங்கள் விரைவில் நிரம்புவதால் முதலில் பரிசோதிக்கப்பட வேண்டும்.",
      response2: "வடிகால் கண்காணிப்பு",
      response2Text:
        "85% க்கு மேல் பயன்பாடு உள்ள இடங்களைக் கவனியுங்கள் — மீதமுள்ள திறன் மிகக் குறைவு.",
      response3: "தொடர் கண்காணிப்பு",
      response3Text:
        "மாதிரி மழை உள்ளீடு மாறும்போதெல்லாம் அபாய நிலைகள் புதுப்பிக்கப்படும்.",
      zonesCount: "கண்காணிப்பு இடங்கள்",
    },

    disclaimer: {
      title: "மாதிரி / சோதனை தரவு",
      text: "இந்த அமைப்பு கல்வி மற்றும் திட்ட விளக்கத்திற்காக உருவாக்கப்பட்ட மாதிரி அமைப்பாகும். இது அதிகாரப்பூர்வ அவசர எச்சரிக்கை அமைப்பு அல்ல.",
    },
  },
};

export const LANGUAGES = [
  { code: "en", label: "EN", name: "English" },
  { code: "ta", label: "தமிழ்", name: "தமிழ்" },
];
