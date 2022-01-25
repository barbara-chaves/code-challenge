import ChartData from "../../models/Charts/ChartsModel"
import http from "./http"

class ChartService {
  public getChartsData = async (): Promise<ChartData[]> => {
    const response = await http.get("master/data.json")
    return response.data
  }
}

export default new ChartService()