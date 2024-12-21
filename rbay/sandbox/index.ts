import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
     client.set("name","vikas");
    const name=await client.get("name");
    console.log(name);
    
};
run();
