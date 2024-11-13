class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number");
        }
    }

    get width() {
        return this._width;
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number");
        }
    }

    get height() {
        return `${this._height.toFixed(1)}cm`;
    }

    get area() {
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(10, 12);

console.log(rectangle.width);       // Outputs: 10
console.log(rectangle.height);      // Outputs: "12.0cm"
console.log(rectangle.area);        // Outputs: 120
