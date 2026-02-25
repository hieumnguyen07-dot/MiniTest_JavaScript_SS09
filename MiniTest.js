let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D"," Đơn hàng E"];
let revenous = [1500, 2800, 1200, -500, 3200];
let isRunning = true;
while (isRunning) {
    let menu = `----OrderReport----
    1. Kết quả từ các đơn hàng
    2. Tổng doanh thu hợp lệ`;
    let choice = prompt(menu);
    switch (choice) {
        case "1":
            const highValueProducts = orders.filter((_, index) => revenous[index]);
            alert("Danh sách sản phẩm cao cấp:\n" + (highValueProducts.join(", ") || "Không có sản phẩm nào = 0"));
            break;;
        case "2":
            const totalValuation = revenous.reduce((acc, currPrice, index) => {
                return acc + (currPrice * stocks[index]);
            }, 0);
            alert(`Tổng giá trị tài sản trong kho: ${totalValuation.toLocaleString()} USD`);
            break;
        case "0":
            alert("Đang đóng ứng dụng. Tạm biệt!");
            isRunning = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 2.");
            break;
    }
}