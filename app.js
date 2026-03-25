(function () {
    // ====== Customize these names (optional) ======
    const state = {
        girlfriendName: "My Semicolon",
        yourName: "Md. Tanvir Ahmed Siddique",
    };

    const girlfriendNameEl = document.getElementById("girlfriendNameEl");
    const yourNameEl = document.getElementById("yourNameEl");
    const loveNoteTextEl = document.getElementById("loveNoteTextEl");
    const deployStatusEl = document.getElementById("deployStatusEl");

    if (girlfriendNameEl) girlfriendNameEl.textContent = state.girlfriendName;
    if (yourNameEl) yourNameEl.textContent = state.yourName;
    if (loveNoteTextEl) {
        // Keep the default text unless you want to replace it.
        loveNoteTextEl.textContent = loveNoteTextEl.textContent || "No matter how time changes, I want our story to stay soft, bright, and strong.";
    }

    // Local-time reveal: 12:00 AM on 26 Mar 2026.
    const target = new Date(2026, 2, 25, 0, 0, 0, 0); // month: 2 = March
    const countdownView = document.getElementById("countdownView");
    const contentView = document.getElementById("contentView");
    const body = document.body;

    const daysVal = document.getElementById("daysVal");
    const hoursVal = document.getElementById("hoursVal");
    const minsVal = document.getElementById("minsVal");
    const secsVal = document.getElementById("secsVal");

    const pad2 = n => String(n).padStart(2, "0");

    function computeParts(diffMs) {
        const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
        const days = Math.floor(totalSeconds / (24 * 3600));
        const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;
        return { days, hours, mins, secs };
    }

    function reveal() {
        body.classList.add("is-revealed");
        if (countdownView) countdownView.setAttribute("aria-hidden", "true");
        if (contentView) contentView.setAttribute("aria-hidden", "false");
        if (deployStatusEl) deployStatusEl.textContent = "deployed";
        document.title = `Happy Birthday, ${state.girlfriendName}`;
    }

    function renderCountdown() {
        const now = new Date();
        const diffMs = target.getTime() - now.getTime();
        if (diffMs <= 0) {
        reveal();
        return;
        }

        const { days, hours, mins, secs } = computeParts(diffMs);
        if (daysVal) daysVal.textContent = pad2(days);
        if (hoursVal) hoursVal.textContent = pad2(hours);
        if (minsVal) minsVal.textContent = pad2(mins);
        if (secsVal) secsVal.textContent = pad2(secs);
    }

    // Initial render
    renderCountdown();

    // Keep updating.
    // 250ms feels smooth for a “tech” vibe without burning CPU.
    setInterval(renderCountdown, 250);
})();