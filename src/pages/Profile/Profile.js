import demo from "./logo192.png";
import style from './Profile.module.css'
import { useHistory } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { Link } from "react-router-dom";
const Profile = () => {
  // let navigation = useNavigate();
  let history = useHistory();
  return (
    <div className={style.profilecontainer}>
      <div className={style.infosection}>
        <img className={style.imgsection} src={demo} alt="not found" />
        <h3 className={style.namesection}>Karun Mourya</h3>
      </div>
      <div className="container">
          <div className="row">
            <div className={`${style.karmacontainer} .col`}>
              <p >Karma Count</p>
              <p >3</p>
            </div>
            <div className={`${style.actcontainer} .col`}>
              <p>Acc. Status</p>
              <p >Activated</p>
            </div>
          </div>
        </div>
      <div className={style.linkcontainer}>
        <div className="container">
        <div className="row">
          <div className={`${style.setting} col`}>
          <Link to='/setting'><SettingsApplicationsIcon style={{fontSize:30}}/> Account Setting</Link>
          </div>
          <div className={`${style.notify} col`}>
          <Link href="#"><NotificationsActiveIcon style={{fontSize:30}}/> Notifications</Link>
          </div>
          <div className={`${style.post} col`}>
            <h3>Create your post</h3>
            <p>
            Fill in the information about food you have.
            </p>
            
            <button className={style.edit} type="submit" onClick={
              ()=> history.push('/post')
            }>
              <EditIcon/>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
