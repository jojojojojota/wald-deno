import routeController from '../../app/routeController.ts';
export default class produitController extends routeController {
    index(){
        this.send(this.urlParams);
    }
}