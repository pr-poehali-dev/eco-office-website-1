
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Мой профиль</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=150&h=150" />
                    <AvatarFallback>АИ</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">Александр Иванов</h2>
                  <p className="text-muted-foreground">Администратор</p>
                  
                  <div className="mt-4 flex gap-2">
                    <Badge variant="outline" className="text-secondary border-secondary">Эко-менеджер</Badge>
                    <Badge variant="outline" className="text-secondary border-secondary">Управление</Badge>
                  </div>
                  
                  <Button className="mt-6 w-full" variant="outline">Редактировать профиль</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="personal">Личные данные</TabsTrigger>
                <TabsTrigger value="offices">Назначенные офисы</TabsTrigger>
                <TabsTrigger value="password">Смена пароля</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Личные данные</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Имя</p>
                          <p className="font-medium">Александр</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Фамилия</p>
                          <p className="font-medium">Иванов</p>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">a.ivanov@example.com</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm text-muted-foreground">Должность</p>
                        <p className="font-medium">Руководитель отдела</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm text-muted-foreground">Телефон</p>
                        <p className="font-medium">+7 (999) 123-45-67</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="offices">
                <Card>
                  <CardHeader>
                    <CardTitle>Назначенные офисы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                            <Icon name="Building" className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Главный офис</p>
                            <p className="text-sm text-muted-foreground">ул. Ленина, 25</p>
                          </div>
                        </div>
                        <Badge>Администратор</Badge>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                            <Icon name="Building2" className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Отдел разработки</p>
                            <p className="text-sm text-muted-foreground">ул. Гагарина, 10</p>
                          </div>
                        </div>
                        <Badge>Наблюдатель</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Смена пароля</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Текущий пароль</label>
                        <input type="password" className="w-full px-3 py-2 mt-1 border rounded-md" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Новый пароль</label>
                        <input type="password" className="w-full px-3 py-2 mt-1 border rounded-md" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Подтвердите пароль</label>
                        <input type="password" className="w-full px-3 py-2 mt-1 border rounded-md" />
                      </div>
                      <Button className="mt-2">Сменить пароль</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
