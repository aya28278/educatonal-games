(function() {
    // 1. Define the banned emails (Keep them lowercase)
    const bannedEmails = [
        "mc1079@wscloud.org",
    
    ];

    // 2. Fetch the email the user is trying to log in with
    // NOTE: Replace 'emailInputField' with the actual ID of your email input box
    const emailInput = document.getElementById("emailInputField"); 
    
    if (emailInput) {
        emailInput.addEventListener("change", function() {
            const enteredEmail = emailInput.value.trim().toLowerCase();

            // 3. Trigger the ban if their email matches
            if (bannedEmails.includes(enteredEmail)) {
                // Wipe the webpage screen entirely
                document.body.innerHTML = `
                    <div style="color: white; background: #111; text-align: center; padding: 100px; font-family: sans-serif;">
                        <h1>🚫 Connection Terminated</h1>
                        <p>Your email address has been permanently banned from this Eaglercraft client.</p>
                    </div>
                `;
                // Crash the script loop to prevent Eaglercraft from running
                throw new Error("Banned user attempted authentication.");
            }
        });
    }
})();
