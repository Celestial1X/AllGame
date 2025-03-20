document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("popup");
    let overlay = document.getElementById("popup-overlay");
    let closeBtn = document.getElementById("close-btn");

    // ฟังก์ชันแสดงป๊อปอัพ
    function showPopup() {
        popup.style.display = "block";
        overlay.style.display = "block";
        setTimeout(() => {
            popup.classList.add("show");
            overlay.classList.add("show");
        }, 10);
    }

    // ฟังก์ชันตรวจสอบการบล็อกป๊อปอัพ
    function checkPopupBlock() {
        const blockedTime = localStorage.getItem('popupBlocked');
        if (blockedTime && new Date().getTime() < blockedTime) {
            return; // ถ้าบล็อกไว้แล้วจะไม่แสดงป๊อปอัพ
        }
        showPopup(); // แสดงป๊อปอัพถ้าไม่บล็อก
    }

    // ฟังก์ชันปิดป๊อปอัพ
    function closePopup() {
        popup.classList.remove("show");
        overlay.classList.remove("show");
        setTimeout(() => {
            popup.style.display = "none";
            overlay.style.display = "none";
        }, 300);

        // ถ้าติ๊กไว้จะบล็อกป๊อปอัพใน 30 นาที
        if (document.getElementById("dontShowAgain").checked) {
            const thirtyMinutesFromNow = new Date().getTime() + 30 * 60 * 1000;
            localStorage.setItem('popupBlocked', thirtyMinutesFromNow); // เก็บเวลา
        }
    }

    // เรียกฟังก์ชันตรวจสอบการบล็อกเมื่อโหลดหน้า
    checkPopupBlock();

    closeBtn.addEventListener("click", closePopup);
    overlay.addEventListener("click", closePopup);

    // ฟังก์ชันนับจำนวนเกมที่แสดง
    function updateGameCount() {
        const games = document.querySelectorAll('.game-box');
        let count = 0;
        games.forEach(game => {
            if (game.style.display !== 'none') {
                count++; // นับเกมที่แสดงอยู่
            }
        });
        document.getElementById('game-count').innerText = `พบเกมทั้งหมด ${count} เกม`; // แสดงจำนวนเกม
    }

    // ฟังก์ชันกรองประเภทเกม
    function filterCategory(category) {
        const games = document.querySelectorAll('.game-box');
        games.forEach(game => {
            if (category === 'All' || game.getAttribute('data-category') === category) {
                game.style.display = 'block'; // แสดงเกมที่ตรงกับประเภทที่เลือก
            } else {
                game.style.display = 'none'; // ซ่อนเกมที่ไม่ตรงกับประเภท
            }
        });
        updateGameCount(); // อัพเดตจำนวนเกมหลังจากกรอง
    }

    // กรองประเภทเกมเมื่อคลิกปุ่ม
    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {
            let category = button.innerText; // ใช้ innerText เพื่อจับค่าจากปุ่มที่คลิก
            filterCategory(category); // เรียกฟังก์ชันกรองเมื่อคลิกปุ่ม
        });
    });

    // เรียกฟังก์ชันกรองเมื่อโหลดหน้าเพื่อให้แสดงเกมทั้งหมด
    filterCategory('All');
});

document.addEventListener("DOMContentLoaded", function () {
    // ฟังก์ชันในการเปิดลิงค์ช่องทางการติดต่อ
    function openContactLink(platform) {
        let link = "";

        // เชื่อมโยงไปยังช่องทางต่างๆ
        if (platform === "facebook") {
            link = "https://web.facebook.com/buttercup1752?locale=th_TH"; // ใส่ลิงค์ Facebook ของคุณ
        }

        // เปิดลิงค์
        if (link) {
            window.open(link, "_blank");
        }
    }

    // เพิ่ม event listener ให้ปุ่ม Facebook
    document.getElementById("contact-facebook").addEventListener("click", function() {
        openContactLink("facebook");
    });
});
