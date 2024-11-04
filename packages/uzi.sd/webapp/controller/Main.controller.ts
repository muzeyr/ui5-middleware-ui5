import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import JSONModel from "sap/ui/model/json/JSONModel";

const myPdfMake = pdfMake;
myPdfMake.vfs = pdfFonts.pdfMake.vfs;
console.log(myPdfMake);

/**
 * @namespace uzi.sd.controller
 */
export default class Main extends BaseController {
	onInit(): void {
		const sdData = {
			data: [
				{
					MaterialNo: "1001",
					MaterialDesc: "Material Example 1",
					Quantity: 100,
					ItemNo: "10",
				},
				{
					MaterialNo: "1002",
					MaterialDesc: "Material Example 2",
					Quantity: 1,
					ItemNo: "10",
				},
				{
					MaterialNo: "1003",
					MaterialDesc: "Material Example 3",
					Quantity: 10,
					ItemNo: "10",
				},
				{
					MaterialNo: "1004",
					MaterialDesc: "Material Example 4",
					Quantity: 30,
					ItemNo: "10",
				},
				{
					MaterialNo: "1005",
					MaterialDesc: "Material Example 5",
					Quantity: 90,
					ItemNo: "10",
				},
			],
		};

		// Model oluştur ve verileri ayarla
		const oModel = new JSONModel(sdData);
		this.getView().setModel(oModel, "sd");
	}

	public back(): void {
		console.log("onBackButtonPress");
		this.onNavBack();
	}

	public navigateToMM(oEvent: any): void {
		this.getRouter().navTo("mm", {
			materialNo: "22",
		});
	}
}
