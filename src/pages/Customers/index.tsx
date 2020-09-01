import React, { useState, useEffect, useCallback } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import { fetchAllUsers } from "../../servies/index";
import SearchInput from "../../components/searchInput";
import Button from "../../components/button";
import "./index.css";

type Geo = {
  lat: string;
  lng: string;
};
export type Address = {
  city: string;
  geo?: Geo;
  street?: string;
  suite?: string;
  zipcode?: string;
};

export type Customer = {
  id?: string | number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: Address;
};

export const Customers: React.FC<RouteComponentProps> = (props) => {
  const [customers, setCustomers] = useState<Array<Customer> | null>(null);
  const [userInput, setUserInput] = useState<string>("");
  const [filteredCustomersList, setFilteredCustomersList] = useState<
    Array<Customer>
  >([]);

  useEffect(() => {
    fetchAllUsers().then((users) => {
      console.log(users);
      setCustomers(users);
    });
  }, []);

  useEffect(() => {
    if (customers) {
      const filteredCustomersList = customers.filter((customer) =>
        customer.name.toUpperCase().includes(userInput.toUpperCase())
      );
      setFilteredCustomersList(filteredCustomersList);
    }
  }, [customers, userInput]);

  // Debounce callback
  const [debouncedCallback] = useDebouncedCallback(
    // function
    (value: string) => {
      setUserInput(value);
    },
    // delay in ms
    1000
  );

  const handleClick = useCallback(() => {
    props.history.push("/add-customer");
  }, [props]);

  return (
    <div className="container">
      <div className="table-container">
        <SearchInput setUserInput={debouncedCallback} />
        {filteredCustomersList.length ? (
          <>
            <table>
              <thead>
                <tr>
                  <th> Full Name </th>
                  <th>userName</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomersList.map((customer, i) => (
                  <tr key={i}>
                    <td>{customer.name}</td>
                    <td>{customer.username}</td>
                    <td>{customer.email}</td>
                    <td>{customer.address.city}</td>
                    <td>{customer.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button text={"new Customer"} onClick={handleClick} />
          </>
        ) : (
          <span>No Such Customer!, Try New Search.</span>
        )}
      </div>
    </div>
  );
};

export default withRouter(Customers);
