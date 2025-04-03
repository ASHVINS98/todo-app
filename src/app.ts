import http from "http";
import express, { Express } from "express";

class App {
  public app: Express;
  public server: http.Server;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port || 3000;
    this.server = http.createServer(this.app);
  }

  private initHealthCheck(){
    this.app.get("/health", (req, res) => {
      res.status(200).send({
				msg: 'all is GO',
				timestamp: new Date().toISOString()
			});
    });
  }
  public async start (){
    this.initHealthCheck();
    this.listen()
  }
  private listen(){
    this.server.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default App
