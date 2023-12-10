import React, { useState } from "react";
import { IonButton } from "@ionic/react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  pincode: string;
  city: string;
  state: string;
}

const TerSer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
  });

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <div>
      <form className="booking-form" onSubmit={handleFormSubmit}>
        <h2>Book Service</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your Name (Required)"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="Your Number (Required)"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Your Email (Required)"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="address"
            id="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            placeholder="Your Address (Required)"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            id="pincode"
            value={formData.pincode}
            onChange={(e) =>
              setFormData({ ...formData, pincode: e.target.value })
            }
            placeholder="Your Pincode"
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City/District/Town</label>
          <input
            type="text"
            id="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="Your City/District/Town"
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
            placeholder="Your State"
          />
        </div>
        <div className="button-container">
          <button type="submit">
            <IonButton href="app/list/pestcontrol/termite/bookservice/next">
              Next
            </IonButton>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TerSer;
