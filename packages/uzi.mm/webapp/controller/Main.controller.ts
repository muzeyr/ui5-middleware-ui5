import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import JSONModel from "sap/ui/model/json/JSONModel";

const myPdfMake = pdfMake;
myPdfMake.vfs = pdfFonts.pdfMake.vfs;
console.log(myPdfMake);

/**
 * @namespace uzi.mm.controller
 */
export default class Main extends BaseController {
	onInit(): void {
		const mmData = {
			data: [
				{ MaterialNo: "1001", MaterialDesc: "Material Example 1" },
				{ MaterialNo: "1002", MaterialDesc: "Material Example 2" },
				{ MaterialNo: "1003", MaterialDesc: "Material Example 3" },
				{ MaterialNo: "1004", MaterialDesc: "Material Example 4" },
				{ MaterialNo: "1005", MaterialDesc: "Material Example 5" },
			],
		};

		// Model oluştur ve verileri ayarla
		const oModel = new JSONModel(mmData);
		this.getView().setModel(oModel, "mm");
	}

	public back(): void {
		//this.onNavBack();

		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("sd"); // 'sd' rotasına yönlendirme
	}

	public navigateToSD(materialNo: string): void {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("sd"); // 'sd' rotasına yönlendirme
	}
}
