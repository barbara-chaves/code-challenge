import http from "./http"

class ChartService {
  public getChartsData = async () => {
    const response = await http.get("master/data.json")
    return response
  }
}

export default new ChartService()