import { Route, Switch } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Home } from "@/pages/Home";
import { Categories } from "@/pages/Categories";
import { CategoryDetail } from "@/pages/CategoryDetail";
import { QuizPlay } from "@/pages/QuizPlay";
import { NotFound } from "@/pages/NotFound";

function App() {
    return (
          <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">
                        <Switch>
                                  <Route path="/" component={Home} />
                                  <Route path="/categories" component={Categories} />
                                  <Route path="/category/:id" component={CategoryDetail} />
                                  <Route path="/quiz/:slug" component={QuizPlay} />
                                  <Route component={NotFound} />
                        </Switch>Switch>
                </main>main>
                <Footer />
          </div>div>
        );
}

export default App;
</div>
