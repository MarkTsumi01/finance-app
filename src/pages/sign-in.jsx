import AppHeader from "@/components/AppHeader"
import UserForm from "@/components/UserForm"
import Loading from "@/components/Loading"
import Link from 'next/link'
import Router from 'next/router';
import axios from "axios"
import { useEffect } from "react";
import { message } from "antd"

import { useSelector, useDispatch } from 'react-redux'
import { singIn } from '@/slices/userSlice'


export default function SignIn() {
  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch()

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
  const handleSignIn = (values) => {
    return axios.post(`${process.env.API_URL}/users/login`, values)
      .then(function (response) {
        dispatch(singIn(response.data))
        success()
        return true
      })
      .catch(function (e) {
        error(e)
        return false
      })
  }

  useEffect(() => {
    if (token !== null) {
      Router.push('/');
    }
  }, [token]);

  if (token) {
    return <Loading />
  }
  return (
    <>
      {contextHolder}
      <AppHeader title="Sign In" />
      <div className="app-content">
        <div className="authen-content">
          <header className="app-name">
            <i className="app-name-icon material-symbols-outlined">
              account_balance_wallet
            </i>
            <label className="app-name-label">Income & Expenses</label>
          </header>
          <UserForm textBtSubmit='Sign In' onFinish={handleSignIn} >
            <Link className="link" href="/sign-up">Create a new account</Link>
          </UserForm>
        </div>
      </div>
    </>
  )
}