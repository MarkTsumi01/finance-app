import AppHeader from "@/components/AppHeader"
import UserForm from "@/components/UserForm"
import Link from 'next/link'
import axios from "axios"
import { message } from "antd"

export default function SignUp() {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  const error = (e) => {
    const content = e?.response?.data?.error || 'This is an error message'
    messageApi.open({
      type: 'error',
      content: content,
    });
  };
  const handleCreateUser = (values) => {
    return axios.post(`${process.env.API_URL}/users`, values)
      .then(function () {
        success()
        return true
      })
      .catch(function (e) {
        error(e)
        return false
      })
  }
  return (
    <>
      {contextHolder}
      <AppHeader title="Sign Up" />
      <div className="app-content">
        <div className="authen-content">
          <header className="app-name">
            <i className="app-name-icon material-symbols-outlined">
              account_box
            </i>
            <label className="app-name-label">Create a new account</label>
          </header>
          <UserForm textBtSubmit='Sign Up' onFinish={handleCreateUser} >
            <Link className="link" href="/sign-in">Back to login page</Link>
          </UserForm>
        </div>
      </div>
    </>
  )
}