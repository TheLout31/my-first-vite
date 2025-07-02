import React, { useReducer } from "react";

const initialStudent = {
  name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    state: "",
    city: {
      name: "",
      locality: {
        pinCode: "",
        landmark: "",
      },
    },
    coordinates: {
      latitude: "",
      longitude: "",
    },
  },
  courses_offered: "",
};

const initialState = [];

function setNestedValue(obj, path, value) {
  const keys = path.split(".");
  const updated = { ...obj };
  let current = updated;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    current[key] = { ...current[key] };
    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
  return updated;
}

function reducer(state, action) {
  switch (action.type) {
    case "addStudent":
      return [
        ...state,
        {
          stdId: Date.now(),
          data: { ...initialStudent },
        },
      ];

    case "changeInput":
      return state.map((student) => {
        if (student.stdId === action.stdId) {
          return {
            ...student,
            data: setNestedValue(student.data, action.field, action.payload),
          };
        }
        return student;
      });

    default:
      return state;
  }
}

const CollegeData = () => {
  const [students, dispatch] = useReducer(reducer, []);

  const handleInputChange = (stdId, e) => {
    dispatch({
      type: "changeInput",
      stdId,
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleAddStudent = () => {
    dispatch({ type: "addStudent" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = students.map((student) => ({
      stdId: student.stdId,
      ...student.data,
      courses_offered: student.data.courses_offered
        .split(",")
        .map((c) => c.trim())
        .filter(Boolean),
    }));
    console.log("Submitted student list:", result);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>College Student Form</h1>

      <button onClick={handleAddStudent} style={styles.button}>
        Add Student
      </button>

      {students.length === 0 && <p>No students added yet.</p>}

      {students.map((student, index) => (
        <form
          key={student.stdId}
          onSubmit={handleSubmit}
          style={{ ...styles.form, marginTop: "20px" }}
        >
          <h2>Student {index + 1}</h2>

          <div style={styles.group}>
            <label>Name</label>
            <input
              name="name"
              value={student.data.name}
              onChange={(e) => handleInputChange(student.stdId, e)}
            />
          </div>

          <div style={styles.group}>
            <label>Establishment Year</label>
            <input
              type="number"
              name="establishment_year"
              value={student.data.establishment_year}
              onChange={(e) => handleInputChange(student.stdId, e)}
            />
          </div>

          <h3>Address</h3>

          <div style={styles.group}>
            <label>Building</label>
            <input
              name="address.building"
              value={student.data.address.building}
              onChange={(e) => handleInputChange(student.stdId, e)}
            />
          </div>

          <div style={styles.group}>
            <label>Street</label>
            <input
              name="address.street"
              value={student.data.address.street}
              onChange={(e) => handleInputChange(student.stdId, e)}
            />
          </div>

          <div style={styles.group}>
            <label>State</label>
            <input
              name="address.state"
              value={student.data.address.state}
              onChange={(e) => handleInputChange(student.stdId, e)}
            />
          </div>

          <div style={styles.row}>
            <div style={styles.group}>
              <label>City</label>
              <input
                name="address.city.name"
                value={student.data.address.city.name}
                onChange={(e) => handleInputChange(student.stdId, e)}
              />
            </div>

            <div style={styles.group}>
              <label>Pin Code</label>
              <input
                name="address.city.locality.pinCode"
                value={student.data.address.city.locality.pinCode}
                onChange={(e) => handleInputChange(student.stdId, e)}
              />
            </div>

            <div style={styles.group}>
              <label>Landmark</label>
              <input
                name="address.city.locality.landmark"
                value={student.data.address.city.locality.landmark}
                onChange={(e) => handleInputChange(student.stdId, e)}
              />
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.group}>
              <label>Latitude</label>
              <input
                name="address.coordinates.latitude"
                value={student.data.address.coordinates.latitude}
                onChange={(e) => handleInputChange(student.stdId, e)}
              />
            </div>

            <div style={styles.group}>
              <label>Longitude</label>
              <input
                name="address.coordinates.longitude"
                value={student.data.address.coordinates.longitude}
                onChange={(e) => handleInputChange(student.stdId, e)}
              />
            </div>
          </div>

          <div style={styles.group}>
            <label>Courses Offered (comma-separated)</label>
            <input
              name="courses_offered"
              value={student.data.courses_offered}
              onChange={(e) => handleInputChange(student.stdId, e)}
            />
          </div>
        </form>
      ))}

      {students.length > 0 && (
        <button onClick={handleSubmit} style={{ ...styles.button, marginTop: "30px" }}>
          Submit All
        </button>
      )}
    </div>
  );
};

const styles = {
  form: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    // backgroundColor: "#fafafa",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "12px",
  },
  row: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  button: {
    padding: "10px 18px",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default CollegeData;
