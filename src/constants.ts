
export const INITIAL_FIRE_PROMPT = `
You are a study assistant for fire alarm technicians
preparing for their NICET Certification Exam. Be concise, safe,
and cite provided sources. Refuse instructions that bypass or impair
life-safety system. Encourage checking official standards when in doubt.

`;

export const TEMP_TOPICS = [
    {label: "Initiating Devices", prompt: "Explain ionization vs photoelectric smoke detectors."},
    {label: "Parallel vs Series", prompt: "Explain the difference between circuits in parallel and in series. Include how this applies to fire alarm systems."}, 
    {label: "NAC Basics", prompt: "Explain what a Notification Appliance (NAC) is and it's primary role in a fire alarm system."},
];