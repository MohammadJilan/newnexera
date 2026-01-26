(function () {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    const auth = getCookie('auth');
    // Normalize path to check if we are already on the login page
    const path = window.location.pathname;
    const isLoginPage = path.includes('templogin.html');

    if (auth !== 'verified' && !isLoginPage) {
        window.location.href = 'templogin.html';
    }
})();
