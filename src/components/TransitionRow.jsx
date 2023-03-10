import moment from 'moment';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';

const { confirm } = Modal;

const showConfirm = (onOk = () => { }) => {
  confirm({
    title: 'Are you sure delete this transition?',
    icon: <ExclamationCircleFilled />,
    content: 'delete this transition',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk,
    onCancel() {
      console.log('Cancel');
    },
  });
};

export default function TransitionRow({ id = "", type = '', title = '', amount = 0, created_at = '2023-03-08T11:48:44.490595Z', deleteTransition = () => { } }) {
  const createdAt = moment(created_at)
  let className, icon = ''
  switch (type) {
    case "income":
      className = "--income"
      icon = "download"
      break;
    case "expend":
      className = "--expenses"
      icon = "upload"
      break;
    default:
      return null
  }

  return (
    <>
      <div className={`transaction-list transaction-lis${className}`}>
        <div className="transaction-list-icon">
          <i className="material-symbols-outlined">
            {icon}
          </i>
        </div>
        <div className="transaction-list-detail">
          <label className="transaction-name">{title}</label>
          <label className="transaction-datetime">{createdAt.format('MMMM Do YYYY, h:mm:ss a')}</label>
        </div>
        <div className="transaction-list-amount">
          + {amount}
        </div>
        <div className="transaction-list-action">
          <button className="btn" onClick={() => showConfirm(() => deleteTransition(id))}>
            <i className="material-symbols-outlined">
              delete
            </i>
          </button>
        </div>
      </div>
    </>
  );
}