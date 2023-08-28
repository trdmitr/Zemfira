import Papa from "papaparse";
export default class SheetServce {
 static fetchData = () => {
    
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSru4bgOeoaZ0JnAlMFbz3GN9DxUu4gRm9NXMgGGjXhUse5SDPWjeUChK51egePO1YqDkjFEJyaaHS1/pub?output=csv",
      {
        download: true,
        header: true,
        worker: true,
        skipEmptyLines: true,
        complete: this.updateData,
        error: (error) => {
          console.error(error);
          this.setState(error)
        }
      }
    );
  }
}  