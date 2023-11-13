if (window.innerWidth < 768) {
    const dropdownToggle = document.querySelector('.nav-item.dropdown .nav-link.dropdown-toggle');
    const dropdownContent = document.querySelector('.nav-item.dropdown .dropdown-content');
    const selectMenu = document.querySelector('.select-menu select');

    // Ẩn menu dropdown ban đầu
    dropdownContent.style.display = 'none';

    // Hiển thị menu select và cập nhật giá trị khi chọn
    dropdownToggle.addEventListener('click', function () {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });

    // Sao chép các lựa chọn từ menu dropdown vào menu select
    const dropdownItems = dropdownContent.querySelectorAll('a');
    dropdownItems.forEach(function (item) {
        const option = document.createElement('option');
        option.value = item.getAttribute('href');
        option.text = item.innerText;
        selectMenu.appendChild(option);
    });

    // Xử lý sự kiện khi chọn lựa chọn trên menu select
    selectMenu.addEventListener('change', function () {
        const selectedOption = selectMenu.options[selectMenu.selectedIndex];
        const selectedValue = selectedOption.value;
        window.location.href = selectedValue;
    });
}