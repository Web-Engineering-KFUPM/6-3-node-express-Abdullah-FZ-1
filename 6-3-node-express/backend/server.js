// TODO 1: Import and Create express app instance

// TODO 1: Define server port
const app = express();

// TODO 4: Import and Apply CORS middleware

app.use(cors());
// TODO 5: Import and apply Morgan middleware

app.use(morgan("dev"));
// TODO 6.1: Create root route "/"
app.get("/", (req, res) => {
  res.send("Express server is running");
});

// TODO 6.2: Create "/api/quote" route


// TODO 7: Start server using app.listen
