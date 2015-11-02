import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class GalleryViewControl extends BaseViewControl {
    templateString: string = require('./gallery.vc.html');

    context: any = {};
}

register.viewControl('gallery-vc', GalleryViewControl);
