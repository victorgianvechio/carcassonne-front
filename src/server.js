import './config/dotenv';
import App from './App';

const port = process.env.APP_PORT || 3030;

App.listen(port, () => {
  console.log(`carcassonne-front is running on port ${port} - ${new Date()}`);
});
