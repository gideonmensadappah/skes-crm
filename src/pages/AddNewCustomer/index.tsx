import React, { useCallback, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "../../components/button";
import "./index.css";
import { Customer, Address } from "../Customers";

interface Props extends RouteComponentProps {}

const AddNewCustomer: React.FC<Props> = (props) => {
  const [name, setName] = useState<string | null>(null);
  const [username, setUserName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);

  const onFirstNameChange = useCallback((event: React.ChangeEvent<any>) => {
    const { value } = event.currentTarget;
    setName(value);
  }, []);
  const onLastNameChange = useCallback((event: React.ChangeEvent<any>) => {
    const { value } = event.currentTarget;
    setUserName(value);
  }, []);
  const onEmailNameChange = useCallback((event: React.ChangeEvent<any>) => {
    const { value } = event.currentTarget;
    setEmail(value);
  }, []);
  const onAddressChange = useCallback((event: React.ChangeEvent<any>) => {
    const { value } = event.currentTarget;
    setAddress(value);
  }, []);
  const onPhoneChange = useCallback((event: React.ChangeEvent<any>) => {
    const { value } = event.currentTarget;
    setPhone(value);
  }, []);

  const handleClick = useCallback(
    (event: React.MouseEvent<any>) => {
      event.preventDefault();
      const { history } = props;
      // TODO (ADD VALIDATION!)
      if (name && username && email && address && phone) {
        const newCustomer: Customer = {
          name,
          username,
          email,
          address: {
            city: address,
          },
          phone,
        };
        // check if to send a json to the backend

        history.push("/customers");
      } else {
        alert("Please Check The Form!");
      }
    },
    [props, name, username, email, address, phone]
  );

  return (
    <div className="container">
      <form action="" noValidate autoComplete="off">
        <div className="form-controller">
          <label htmlFor="firstName"> </label>
          <input
            onChange={onFirstNameChange}
            type="text"
            placeholder="First Name"
            name="firstName"
          />
        </div>
        <div className="form-controller">
          <label htmlFor="lastName"> </label>
          <input
            onChange={onLastNameChange}
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
        </div>
        <div className="form-controller">
          <label htmlFor="email"> </label>
          <input
            onChange={onEmailNameChange}
            type="text"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="form-controller">
          <label htmlFor="address"> </label>
          <input
            onChange={onAddressChange}
            type="text"
            placeholder="Address"
            name="address"
          />
        </div>
        <div className="form-controller">
          <label htmlFor="phone"> </label>
          <input
            onChange={onPhoneChange}
            type="text"
            placeholder="Phone"
            name="phone"
          />
        </div>
        <Button onClick={handleClick} text="Add New Customer!" />
      </form>
    </div>
  );
};

export default AddNewCustomer;
