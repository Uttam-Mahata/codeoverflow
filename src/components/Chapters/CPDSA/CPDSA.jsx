import { Button, Card, CardContent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faWandSparkles } from '@fortawesome/free-solid-svg-icons';
import cp from '../../../../assets/images/cp.png';

const CPDSA = () => {
  return (
    <div className="cp-container h-full m-10 p-10">
      <div className="top-container flex justify-between items-center ">
        <div className="left-section flex flex-col w-[600px]">
          <div className="heading flex gap-5">
            <h1 className="text-grey-800 text-5xl font-bold">DSA</h1>
            <h1 className="text-grey-800 text-5xl font-bold">and</h1>
            <h1 className="text-green-800 text-5xl font-bold">Competitive</h1>
            <h1 className="text-green-800 text-5xl font-bold">Programming</h1>
          </div>
          <div className="mt-10 mb-10 text-2xl text-color-slate-300 font-medium shadow-md">
            Empower your coding journey with a rich collection of Data Structures and
            Competitive Programming resources, thoughtfully assembled to guide coding
            enthusiasts of varying skill levels through their learning journey.
          </div>
          <div className="buttons w-[550px] flex gap-4">
            <Button className="shadow-lg shadow-offset-4 shadow-gray-500" variant="contained" color="primary" style={{ width: '350px' }}>
              <faShare></faShare>
              Share
            </Button>
            <Button className="hover:border-slate-700 shadow-lg shadow-offset-4 shadow-gray-500" variant="outlined" color="primary" style={{ width: '350px' }}>
              <faShare></faShare>
              Resources
            </Button>
          </div>
        </div>
        <img className="shadow-lg shadow-offset-4 shadow-gray-500" src={cp} alt="cp-image" style={{ width: 450, height: 300, borderRadius: 20 }} />
      </div>
    </div>
  );
};

export default CPDSA;
