import Session from '../../../model/DBWorkForceRegistration';
import ConnectDB from '../../../utils/DBConnect';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addTest(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await ConnectDB();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const test = await Session.create(req.body);
    console.log('CREATED DOCUMENT');
    // windows.alert("Congulations!! On Joining our team!!")
    res.json({ test });
  } catch (error) {
    console.log(error);
    throw new Error({ error });
  }
}
