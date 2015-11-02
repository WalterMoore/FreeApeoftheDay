var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_vc_1 = require('../base/base.vc');
var GalleryViewControl = (function (_super) {
    __extends(GalleryViewControl, _super);
    function GalleryViewControl() {
        _super.apply(this, arguments);
        this.templateString = require('./gallery.vc.html');
        this.context = {};
    }
    return GalleryViewControl;
})(base_vc_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GalleryViewControl;
platypus_1.register.viewControl('gallery-vc', GalleryViewControl);
