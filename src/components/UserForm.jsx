import { Form, Input } from 'antd'
export default function UserForm({ onFinish = () => { }, children, textBtSubmit = '' }) {
  const [form] = Form.useForm();
  const handleOnFinish = (values) => {
    onFinish(values) && form.resetFields();
  }
  return (
    <Form
      form={form}
      size="large"
      onFinish={handleOnFinish}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{
          required: true,
          message: 'Please input your username!',
        }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{
          required: true,
          message: 'Please input your Password!',
        }]}
      >
        <Input.Password />
      </Form.Item>
      <section className="authen-action">
        <button className="btn btn--primary" type="submit">{textBtSubmit}</button>
        {children}
      </section>
    </Form >
  );
}