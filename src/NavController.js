export class NavController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.renderNavbar(this.model.getGroups(), this.model.getGirls());
    }

}
