/* --- Layout and Centering --- */
#collectibleContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
}

#collectibleImage {
  display: block;
  margin: 0 auto;
  max-width: 320px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
}

/* --- Submit Button Styling --- */
#submitInventoryBtn {
  margin-top: 1rem;
  background-color: var(--accent);
  color: white;
  font-weight: bold;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

#submitInventoryBtn:hover {
  background-color: #388e3c;
}

/* --- Other Elements for Consistency --- */
.qty-input.invalid {
  border: 2px solid red;
  background-color: #3a0000;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.card {
  background: #292929;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  position: relative;
  box-shadow: 0 2px 12px rgba(0,0,0,0.6);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  max-width: 160px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 0.5rem;
}

.card .qty-input {
  margin-top: 0.5rem;
  width: 60px;
  padding: 0.3rem;
  font-size: 1rem;
}

.card button {
  margin-top: 0.5rem;
}
