import routeController from '../../app/routeController.ts';
export default class accueilController extends routeController {
    index(){
        this.json({params: this.params, urlParams: this.urlParams});
    }
}