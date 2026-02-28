import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "De la intuición al tablero de control: el cambio que separa a las empresas que sobreviven de las que crecen",
      excerpt: "En muchas empresas de Colombia pasa algo curioso: los dueños sienten que “conocen” su negocio, pero cuando se sientan a tomar decisiones importantes, lo hacen casi a ciegas.",
      date: "2025-01-30",
      author: "Francia Londoño",
      readTime: "1 mes",
      category: "Empresarial"
    },
    {
      id: 2,
      title: "Factura electrónica 2026: El cambio silencioso que está transformando las pymes colombianas",
      excerpt: "La facturación electrónica dejó de ser \"una obligación más\" para convertirse en una ventaja competitiva silenciosa. Mientras algunos empresarios la ven como un dolor de cabeza técnico, otros ya están aprovechando sus beneficios reales.",
      date: "2026-02-26",
      author: "Carlos Ruiz",
      readTime: "2 días",
      category: "Facturación"
    },
    {
      id: 3,
      title: "Declaración de renta 2026: Las 5 trampas que están costando millones a las pymes. Ya cerraron febrero. La renta 2026 viene rápido. Aquí lo que NO te están diciendo.",
      excerpt: "Realidad: La DIAN cruza automáticamente tu facturación electrónica con tu declaración. Si hay inconsistencias, recibes sanción automática.",
      date: "2026-02-2",
      author: "María Gómez",
      readTime: "6 min",
      category: "Tributario"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Blog 5 Direcciones
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Conexión <span className="text-accent">Empresarial</span>
          </h1>
          {/* descripción eliminada */}
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-4">{post.category}</Badge>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('es-ES')}
                    </div>
                    <Button size="sm">
                      Leer Más <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;