import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      id: 6,
      title: "Nómina en julio de 2026: el mes en que las empresas deben recalibrar jornada, descansos y costo laboral",
      excerpt:
        "Julio de 2026 exige revisar jornada máxima, festivos, recargos y políticas internas para evitar errores de liquidación, turnos y costo laboral en Colombia.",
      date: "2026-06-25",
      author: "5 Direcciones",
      category: "Nómina",
      href: "https://www.linkedin.com/pulse/n%C3%B3mina-en-julio-de-2026-el-mes-que-las-empresas-deben-r74ze/?trackingId=v%2FAolTm9eDr6uv8HH2S6Ig%3D%3D"
    },
    {
      id: 1,
      title: "Falta de liquidez: cómo usar el Radian y factoring para fortalecer tu flujo de caja",
      excerpt:
        "Estrategias prácticas para transformar la falta de liquidez en una oportunidad de crecimiento y mantener tu operación activa sin perder control financiero.",
      date: "2026-06-08",
      author: "5 Direcciones",
      category: "Finanzas",
      href: "https://www.linkedin.com/pulse/falta-de-liquidez-c%C3%B3mo-usar-el-radian-y-factoring-para-jlble/"
    },
    {
      id: 2,
      title: "Retención en la fuente 2026 en Colombia: qué cambió tras la suspensión del Decreto 572 de 2025",
      excerpt:
        "Actualizamos los puntos clave para las empresas frente a los cambios de retención en la fuente y cómo ajustar sus procesos contables y tributarios.",
      date: "2026-05-22",
      author: "5 Direcciones",
      category: "Tributario",
      href: "https://www.linkedin.com/pulse/retenci%C3%B3n-en-la-fuente-2026-colombia-qu%C3%A9-cambi%C3%B3-tras-suspensi%C3%B3n-isx0e/"
    },
    {
      id: 3,
      title: "El costo oculto del desorden administrativo: cómo impacta la salud mental",
      excerpt:
        "Una gestión desordenada no solo afecta procesos: también desgasta al equipo, genera estrés y aumenta el riesgo de errores críticos.",
      date: "2026-04-30",
      author: "5 Direcciones",
      category: "Administrativo",
      href: "https://www.linkedin.com/pulse/el-costo-oculto-del-desorden-administrativo-la-salud-mental-fii0e/"
    },
    {
      id: 4,
      title: "La gestión administrativa es un gasto: lo que evita una empresa inteligente",
      excerpt:
        "Descubre por qué una buena gestión administrativa es una inversión en estabilidad, eficiencia y crecimiento sostenido.",
      date: "2026-04-12",
      author: "5 Direcciones",
      category: "Gestión",
      href: "https://www.linkedin.com/pulse/la-gesti%C3%B3n-administrativa-es-un-gasto-lo-que-evita-una-wv0he/"
    },
    {
      id: 5,
      title: "Inclusión laboral de personas con discapacidad: más que cumplimiento",
      excerpt:
        "Un enfoque empresarial que impulsa la diversidad, mejora la reputación y fortalece la productividad de las organizaciones.",
      date: "2026-03-18",
      author: "5 Direcciones",
      category: "Talento Humano",
      href: "https://www.linkedin.com/pulse/inclusi%C3%B3n-laboral-de-personas-con-discapacidad-m%C3%A1s-que-h8r2e/"
    }
  ];

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredArticle =
    articles.find((article) => article.id === 6) ?? sortedArticles[0];

  const otherArticles = sortedArticles.filter(
    (article) => article.id !== featuredArticle.id
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-hero text-white overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <Badge className="mb-5 bg-accent/20 text-accent border border-accent/20">
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Artículos de LinkedIn para que tu empresa esté siempre informada.
            </h1>
            <p className="mt-6 text-lg text-slate-200 leading-relaxed">
              Noticias y análisis prácticos que ayudan a tu empresa a tomar mejores decisiones.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
            <Card className="overflow-hidden border border-primary/25 bg-primary/18 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="bg-accent/10 text-accent border border-accent/20">
                    {featuredArticle.category}
                  </Badge>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-accent">
                    LinkedIn
                  </span>
                </div>

                <h2 className="mt-6 text-3xl md:text-4xl font-semibold leading-tight text-white">
                  {featuredArticle.title}
                </h2>
                <p className="mt-5 text-slate-300 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-2 text-sm text-slate-200">
                    <p className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      {new Date(featuredArticle.date).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <p className="flex items-center gap-2">
                      <User className="h-4 w-4 text-accent" />
                      {featuredArticle.author}
                    </p>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
                  >
                    <a href={featuredArticle.href} target="_blank" rel="noreferrer">
                      Leer en LinkedIn <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="rounded-3xl border border-primary/25 bg-primary/18 p-8 shadow-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-accent">Por qué leer</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Información útil para tu empresa.</h3>
                <p className="mt-4 text-slate-200 leading-relaxed">
                  Publicaciones breves y claras para que tu negocio se mantenga informado y actúe con seguridad.
                </p>

                <ul className="mt-8 space-y-4 text-slate-300">
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                    Ideas prácticas para el día a día empresarial.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                    Actualizaciones clave sobre normas y finanzas.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                    Contenido claro para líderes y equipos administrativos.
                  </li>
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-primary/25 bg-primary/18 p-6 shadow-xl">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent">Impacto</p>
                  <h4 className="mt-4 text-xl font-semibold text-white">Decisiones más seguras</h4>
                  <p className="mt-3 text-slate-200 leading-relaxed">
                    Nuestro contenido traduce obligaciones en acciones claras para tu empresa.
                  </p>
                </div>
                <div className="rounded-3xl border border-primary/25 bg-primary/18 p-6 shadow-xl">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent">Alcance</p>
                  <h4 className="mt-4 text-xl font-semibold text-white">Lectura directa</h4>
                  <p className="mt-3 text-slate-200 leading-relaxed">
                    Contenidos pensados para empresarios y líderes administrativos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Últimos artículos</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Conecta tu empresa con la agenda actual.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Solo mostramos los artículos que compartimos en LinkedIn, con análisis enfocado en las decisiones que tu compañía necesita hoy.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {otherArticles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden border border-primary/10 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className="bg-primary/10 text-primary">{article.category}</Badge>
                    <span className="text-xs uppercase tracking-[0.25em] text-accent">LinkedIn</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">{article.title}</h3>
                  <p className="mt-4 text-slate-600 leading-relaxed">{article.excerpt}</p>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(article.date).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {article.author}
                    </span>
                  </div>
                  <div className="mt-6">
                    <Button asChild size="sm" className="inline-flex items-center gap-2 text-primary">
                      <a href={article.href} target="_blank" rel="noreferrer">
                        Ver en LinkedIn <ArrowRight className="h-4 w-4" />
                      </a>
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