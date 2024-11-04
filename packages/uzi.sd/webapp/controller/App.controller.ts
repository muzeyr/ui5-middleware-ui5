import BaseController from "./BaseController";

/**
 * @namespace uzi.sd.controller
 */
export default class App extends BaseController {
	public onInit(): void {
		// apply content density mode to root view
		this.getView().addStyleClass(
			this.getOwnerComponent().getContentDensityClass()
		);
	}
}
