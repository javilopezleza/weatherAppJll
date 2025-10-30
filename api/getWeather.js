export default async function handler(req, res) {
  const { city } = req.query;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!city) {
    return res.status(400).json({ error: "Debe especificar una ciudad" });
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      return res.status(data.cod).json({ error: data.message });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error al obtener el clima:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}
