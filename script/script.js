document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("popup");
    let overlay = document.getElementById("popup-overlay");
    let closeBtn = document.getElementById("close-btn");

    // แสดงป๊อปอัพ
    popup.style.display = "block";
    overlay.style.display = "block";
    setTimeout(() => {
        popup.classList.add("show");
        overlay.classList.add("show");
    }, 10);

    // ปิดป๊อปอัพเมื่อกดปุ่ม
    function closePopup() {
        popup.classList.remove("show");
        overlay.classList.remove("show");
        setTimeout(() => {
            popup.style.display = "none";
            overlay.style.display = "none";
        }, 300);
    }

    closeBtn.addEventListener("click", closePopup);
    overlay.addEventListener("click", closePopup);

    // ระบบกรองประเภทเกม
    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {
            let category = button.getAttribute("data-category");
            document.querySelectorAll(".game-box").forEach(game => {
                game.style.display = category === "all" || game.getAttribute("data-category") === category ? "block" : "none";
            });
        });
    });
});
