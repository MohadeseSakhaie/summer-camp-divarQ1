 //define n
var n = 5;
//code
var grid = [];
var count = 0;
const pro = function (n) {
    var iMax = n;
    var jMax = iMax;

    for (let i = 0; i < iMax; i++) {
        grid[i] = [];

        for (let j = 0; j < jMax; j++) {
            grid[i][j] = count + 1;
            count++;
        }
    }
    console.log(grid);

    const diagonalProduct = grid => {
        let product = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                if (i === j) {
                    if ((grid[i][j] - 1) % 3 === 0)
                        product += grid[i][j];
                };
            };
        };

        let product1 = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                if ((i + j) == ((grid.length) - 1) & (grid[i][j] - 1) % 3 == 0) {
                    product1 += grid[i][j];
                }
            };
        };
        return product1 + product;

    };
    console.log(diagonalProduct(grid));
}
pro(n);