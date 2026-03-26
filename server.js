const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: process.env.PORT || 3000 });

wss.on('connection', (ws) => {
  console.log('新客户端已连接');
  ws.on('message', (data) => {
    console.log(`收到消息: ${data}`);
    ws.send(`服务器收到: ${data}`);
  });
  ws.on('close', () => {
    console.log('客户端已断开');
  });
});

console.log('WebSocket 服务器已启动');
