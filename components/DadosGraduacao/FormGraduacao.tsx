"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Plus, Trash2, Upload, User, GraduationCap, Briefcase, Languages, Award } from "lucide-react";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { cn } from "@/lib/utils";

export default function CandidatoForm() {
  const [activeTab, setActiveTab] = useState("pessoal");
  const [loading, setLoading] = useState(false);

  // Estados para dados pessoais
  const [dadosPessoais, setDadosPessoais] = useState({
    nome: "",
    apelido: "",
    email: "",
    contacto: "",
    whatsapp: "",
    dataNascimento: "" as Date | undefined,
    provincia: "",
    morada: "",
    numeroBi: "",
    nivelAcademico: "",
    genero: "",
    idiomaNativo: "",
  });

  // Estados para formações
  const [formacoes, setFormacoes] = useState([{
    local: "",
    nome: "",
    descricao: "",
    duracao: "",
    dataInicio: "" as Date | undefined,
    dataFim: "" as Date | undefined,
  }]);

  // Estados para experiências
  const [experiencias, setExperiencias] = useState([{
    organizacao: "",
    cargo: "",
    descricao: "",
    dataInicio: "" as Date | undefined,
    dataFim: "" as Date | undefined,
  }]);

  // Estados para idiomas
  const [idiomas, setIdiomas] = useState([{
    nome: "",
    fluencia: "",
  }]);

  // Estados para certificados
  const [certificados, setCertificados] = useState<File[]>([]);

  const adicionarFormacao = () => {
    setFormacoes([...formacoes, {
      local: "",
      nome: "",
      descricao: "",
      duracao: "",
      dataInicio: undefined,
      dataFim: undefined,
    }]);
  };

  const removerFormacao = (index: number) => {
    if (formacoes.length > 1) {
      setFormacoes(formacoes.filter((_, i) => i !== index));
    }
  };

  const adicionarExperiencia = () => {
    setExperiencias([...experiencias, {
      organizacao: "",
      cargo: "",
      descricao: "",
      dataInicio: undefined,
      dataFim: undefined,
    }]);
  };

  const removerExperiencia = (index: number) => {
    if (experiencias.length > 1) {
      setExperiencias(experiencias.filter((_, i) => i !== index));
    }
  };

  const adicionarIdioma = () => {
    setIdiomas([...idiomas, { nome: "", fluencia: "" }]);
  };

  const removerIdioma = (index: number) => {
    if (idiomas.length > 1) {
      setIdiomas(idiomas.filter((_, i) => i !== index));
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setCertificados(Array.from(files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Aqui você implementaria a lógica de submissão
      console.log({
        dadosPessoais,
        formacoes,
        experiencias,
        idiomas,
        certificados,
      });
      
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      alert("Erro ao salvar dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const tabConfig = [
    {
      value: "pessoal",
      label: "Dados Pessoais",
      icon: User,
      description: "Informações básicas do candidato"
    },
    {
      value: "formacao",
      label: "Formação",
      icon: GraduationCap,
      description: "Histórico acadêmico"
    },
    {
      value: "experiencia",
      label: "Experiência",
      icon: Briefcase,
      description: "Experiência profissional"
    },
    {
      value: "idiomas",
      label: "Idiomas",
      icon: Languages,
      description: "Línguas faladas"
    },
    {
      value: "certificados",
      label: "Certificados",
      icon: Award,
      description: "Documentos comprovativos"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Perfil do Candidato
          </h1>
          <p className="text-gray-600">
            Complete o seu perfil para se destacar nas candidaturas
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            {/* Tabs List */}
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 gap-2 p-1 bg-slate-200/50 rounded-2xl">
              {tabConfig.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-brand-main rounded-xl transition-all duration-200"
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Dados Pessoais */}
            <TabsContent value="pessoal" className="space-y-4">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-main/10 rounded-lg">
                      <User className="w-6 h-6 text-brand-main" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        Dados Pessoais
                      </CardTitle>
                      <CardDescription>
                        Informações básicas para o seu perfil
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-sm font-medium">
                        Nome *
                      </Label>
                      <Input
                        id="nome"
                        value={dadosPessoais.nome}
                        onChange={(e) => setDadosPessoais({ ...dadosPessoais, nome: e.target.value })}
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apelido" className="text-sm font-medium">
                        Apelido *
                      </Label>
                      <Input
                        id="apelido"
                        value={dadosPessoais.apelido}
                        onChange={(e) => setDadosPessoais({ ...dadosPessoais, apelido: e.target.value })}
                        placeholder="Seu apelido"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={dadosPessoais.email}
                        onChange={(e) => setDadosPessoais({ ...dadosPessoais, email: e.target.value })}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contacto" className="text-sm font-medium">
                        Contacto *
                      </Label>
                      <Input
                        id="contacto"
                        value={dadosPessoais.contacto}
                        onChange={(e) => setDadosPessoais({ ...dadosPessoais, contacto: e.target.value })}
                        placeholder="+244 XXX XXX XXX"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dataNascimento" className="text-sm font-medium">
                        Data de Nascimento *
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !dadosPessoais.dataNascimento && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dadosPessoais.dataNascimento ? (
                              format(dadosPessoais.dataNascimento, "PPP", { locale: pt })
                            ) : (
                              <span>Selecione a data</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={dadosPessoais.dataNascimento}
                            onSelect={(date) => setDadosPessoais({ ...dadosPessoais, dataNascimento: date })}
                            initialFocus
                            locale={pt}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="genero" className="text-sm font-medium">
                        Gênero *
                      </Label>
                      <Select
                        value={dadosPessoais.genero}
                        onValueChange={(value) => setDadosPessoais({ ...dadosPessoais, genero: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o gênero" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="masculino">Masculino</SelectItem>
                          <SelectItem value="feminino">Feminino</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="provincia" className="text-sm font-medium">
                        Província *
                      </Label>
                      <Input
                        id="provincia"
                        value={dadosPessoais.provincia}
                        onChange={(e) => setDadosPessoais({ ...dadosPessoais, provincia: e.target.value })}
                        placeholder="Sua província"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="morada" className="text-sm font-medium">
                        Morada *
                      </Label>
                      <Input
                        id="morada"
                        value={dadosPessoais.morada}
                        onChange={(e) => setDadosPessoais({ ...dadosPessoais, morada: e.target.value })}
                        placeholder="Sua morada completa"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Formação Acadêmica */}
            <TabsContent value="formacao" className="space-y-4">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-main/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-brand-main" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        Formação Acadêmica
                      </CardTitle>
                      <CardDescription>
                        Adicione sua formação académica e qualificações
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {formacoes.map((formacao, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-brand-main">
                          Formação #{index + 1}
                        </h4>
                        {formacoes.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removerFormacao(index)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Instituição *
                          </Label>
                          <Input
                            value={formacao.local}
                            onChange={(e) => {
                              const novasFormacoes = [...formacoes];
                              novasFormacoes[index].local = e.target.value;
                              setFormacoes(novasFormacoes);
                            }}
                            placeholder="Nome da instituição"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Curso/Formação *
                          </Label>
                          <Input
                            value={formacao.nome}
                            onChange={(e) => {
                              const novasFormacoes = [...formacoes];
                              novasFormacoes[index].nome = e.target.value;
                              setFormacoes(novasFormacoes);
                            }}
                            placeholder="Nome do curso"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">
                          Descrição
                        </Label>
                        <Textarea
                          value={formacao.descricao}
                          onChange={(e) => {
                            const novasFormacoes = [...formacoes];
                            novasFormacoes[index].descricao = e.target.value;
                            setFormacoes(novasFormacoes);
                          }}
                          placeholder="Descreva a sua formação..."
                          rows={3}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Data Início *
                          </Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !formacao.dataInicio && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {formacao.dataInicio ? (
                                  format(formacao.dataInicio, "MM/yyyy")
                                ) : (
                                  <span>Data início</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={formacao.dataInicio}
                                onSelect={(date) => {
                                  const novasFormacoes = [...formacoes];
                                  novasFormacoes[index].dataInicio = date;
                                  setFormacoes(novasFormacoes);
                                }}
                                initialFocus
                                locale={pt}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Data Fim
                          </Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !formacao.dataFim && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {formacao.dataFim ? (
                                  format(formacao.dataFim, "MM/yyyy")
                                ) : (
                                  <span>Data fim</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={formacao.dataFim}
                                onSelect={(date) => {
                                  const novasFormacoes = [...formacoes];
                                  novasFormacoes[index].dataFim = date;
                                  setFormacoes(novasFormacoes);
                                }}
                                initialFocus
                                locale={pt}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Duração
                          </Label>
                          <Input
                            value={formacao.duracao}
                            onChange={(e) => {
                              const novasFormacoes = [...formacoes];
                              novasFormacoes[index].duracao = e.target.value;
                              setFormacoes(novasFormacoes);
                            }}
                            placeholder="ex: 3 anos"
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button
                    type="button"
                    variant="outline"
                    onClick={adicionarFormacao}
                    className="w-full border-dashed border-2 border-brand-main/30 hover:border-brand-main hover:bg-brand-main/5 text-brand-main"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar Formação
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Experiência Profissional */}
            <TabsContent value="experiencia" className="space-y-4">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-main/10 rounded-lg">
                      <Briefcase className="w-6 h-6 text-brand-main" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        Experiência Profissional
                      </CardTitle>
                      <CardDescription>
                        Sua trajetória profissional e experiências anteriores
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {experiencias.map((experiencia, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-brand-main">
                          Experiência #{index + 1}
                        </h4>
                        {experiencias.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removerExperiencia(index)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Organização *
                          </Label>
                          <Input
                            value={experiencia.organizacao}
                            onChange={(e) => {
                              const novasExperiencias = [...experiencias];
                              novasExperiencias[index].organizacao = e.target.value;
                              setExperiencias(novasExperiencias);
                            }}
                            placeholder="Nome da empresa/organização"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Cargo *
                          </Label>
                          <Input
                            value={experiencia.cargo}
                            onChange={(e) => {
                              const novasExperiencias = [...experiencias];
                              novasExperiencias[index].cargo = e.target.value;
                              setExperiencias(novasExperiencias);
                            }}
                            placeholder="Seu cargo/função"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">
                          Descrição *
                        </Label>
                        <Textarea
                          value={experiencia.descricao}
                          onChange={(e) => {
                            const novasExperiencias = [...experiencias];
                            novasExperiencias[index].descricao = e.target.value;
                            setExperiencias(novasExperiencias);
                          }}
                          placeholder="Descreva suas responsabilidades e conquistas..."
                          rows={3}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Data Início *
                          </Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !experiencia.dataInicio && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {experiencia.dataInicio ? (
                                  format(experiencia.dataInicio, "MM/yyyy")
                                ) : (
                                  <span>Data início</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={experiencia.dataInicio}
                                onSelect={(date) => {
                                  const novasExperiencias = [...experiencias];
                                  novasExperiencias[index].dataInicio = date;
                                  setExperiencias(novasExperiencias);
                                }}
                                initialFocus
                                locale={pt}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Data Fim
                          </Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !experiencia.dataFim && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {experiencia.dataFim ? (
                                  format(experiencia.dataFim, "MM/yyyy")
                                ) : (
                                  <span>Data fim (ou atual)</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={experiencia.dataFim}
                                onSelect={(date) => {
                                  const novasExperiencias = [...experiencias];
                                  novasExperiencias[index].dataFim = date;
                                  setExperiencias(novasExperiencias);
                                }}
                                initialFocus
                                locale={pt}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button
                    type="button"
                    variant="outline"
                    onClick={adicionarExperiencia}
                    className="w-full border-dashed border-2 border-brand-main/30 hover:border-brand-main hover:bg-brand-main/5 text-brand-main"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar Experiência
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Idiomas */}
            <TabsContent value="idiomas" className="space-y-4">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-main/10 rounded-lg">
                      <Languages className="w-6 h-6 text-brand-main" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        Idiomas
                      </CardTitle>
                      <CardDescription>
                        Idiomas que domina e nível de fluência
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {idiomas.map((idioma, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold text-brand-main">
                          Idioma #{index + 1}
                        </h4>
                        {idiomas.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removerIdioma(index)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Idioma *
                          </Label>
                          <Input
                            value={idioma.nome}
                            onChange={(e) => {
                              const novosIdiomas = [...idiomas];
                              novosIdiomas[index].nome = e.target.value;
                              setIdiomas(novosIdiomas);
                            }}
                            placeholder="ex: Inglês, Francês, etc."
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Fluência *
                          </Label>
                          <Select
                            value={idioma.fluencia}
                            onValueChange={(value) => {
                              const novosIdiomas = [...idiomas];
                              novosIdiomas[index].fluencia = value;
                              setIdiomas(novosIdiomas);
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Nível de fluência" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="basico">Básico</SelectItem>
                              <SelectItem value="intermedio">Intermediário</SelectItem>
                              <SelectItem value="avancado">Avançado</SelectItem>
                              <SelectItem value="fluente">Fluente</SelectItem>
                              <SelectItem value="nativo">Nativo</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button
                    type="button"
                    variant="outline"
                    onClick={adicionarIdioma}
                    className="w-full border-dashed border-2 border-brand-main/30 hover:border-brand-main hover:bg-brand-main/5 text-brand-main"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar Idioma
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Certificados */}
            <TabsContent value="certificados" className="space-y-4">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-main/10 rounded-lg">
                      <Award className="w-6 h-6 text-brand-main" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        Certificados
                      </CardTitle>
                      <CardDescription>
                        Faça upload dos seus certificados e documentos comprovativos
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-brand-main transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Upload de Certificados
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Faça upload dos seus certificados, diplomas e outros documentos comprovativos
                    </p>
                    <Input
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                      id="certificados"
                    />
                    <Label
                      htmlFor="certificados"
                      className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-brand-main text-white rounded-lg hover:bg-brand-main/90 transition-colors"
                    >
                      <Upload className="w-4 h-4" />
                      Selecionar Ficheiros
                    </Label>
                    <p className="text-sm text-gray-500 mt-3">
                      Formatos suportados: PDF, JPG, PNG (Máx. 10MB por ficheiro)
                    </p>
                  </div>

                  {certificados.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">
                        Ficheiros Selecionados ({certificados.length})
                      </h4>
                      {certificados.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <Award className="w-5 h-5 text-brand-main" />
                            <span className="text-sm font-medium">{file.name}</span>
                          </div>
                          <span className="text-xs text-gray-500">
                            {(file.size / (1024 * 1024)).toFixed(2)} MB
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Actions */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={() => window.history.back()}
              className="text-gray-700 hover:text-gray-900"
            >
              Voltar
            </Button>
            
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  // Limpar formulário
                  setDadosPessoais({
                    nome: "",
                    apelido: "",
                    email: "",
                    contacto: "",
                    whatsapp: "",
                    dataNascimento: undefined,
                    provincia: "",
                    morada: "",
                    numeroBi: "",
                    nivelAcademico: "",
                    genero: "",
                    idiomaNativo: "",
                  });
                  setFormacoes([{
                    local: "",
                    nome: "",
                    descricao: "",
                    duracao: "",
                    dataInicio: undefined,
                    dataFim: undefined,
                  }]);
                  setExperiencias([{
                    organizacao: "",
                    cargo: "",
                    descricao: "",
                    dataInicio: undefined,
                    dataFim: undefined,
                  }]);
                  setIdiomas([{ nome: "", fluencia: "" }]);
                  setCertificados([]);
                }}
              >
                Limpar
              </Button>
              
              <Button
                type="submit"
                disabled={loading}
                className="bg-brand-main hover:bg-brand-main/90 text-white px-8"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    A Guardar...
                  </>
                ) : (
                  "Guardar Perfil"
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}