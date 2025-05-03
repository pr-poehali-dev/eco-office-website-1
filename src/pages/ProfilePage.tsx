
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-4 px-4 sm:py-8 sm:px-4">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-bold">Мой профиль</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Icon name="User" className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">Омар Гереев</h2>
                  <p className="text-muted-foreground">Администратор</p>
                  
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
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
                <TabsTrigger value="personal" className="text-xs sm:text-sm">Личные данные</TabsTrigger>
                <TabsTrigger value="offices" className="text-xs sm:text-sm">Назначенные офисы</TabsTrigger>
                <TabsTrigger value="password" className="text-xs sm:text-sm">Смена пароля</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal">
                <Card>
                  <CardHeader className="py-3 sm:py-4">
                    <CardTitle>Личные данные</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Имя</p>
                          <p className="font-medium">Омар</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Фамилия</p>
                          <p className="font-medium">Гереев</p>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium break-all">gerevo@bk.ru</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm text-muted-foreground">Должность</p>
                        <p className="font-medium">Руководитель отдела</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm text-muted-foreground">Телефон</p>
                        <p className="font-medium">+7 (999) 999-99-99</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="offices">
                <Card>
                  <CardHeader className="py-3 sm:py-4">
                    <CardTitle>Назначенные офисы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                            <Icon name="Building" className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Главный офис</p>
                            <p className="text-sm text-muted-foreground">ул. Ленина, 25</p>
                          </div>
                        </div>
                        <Badge className="self-start sm:self-auto">Администратор</Badge>
                      </div>
                      <Separator />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                            <Icon name="Building2" className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Отдел разработки</p>
                            <p className="text-sm text-muted-foreground">ул. Гагарина, 10</p>
                          </div>
                        </div>
                        <Badge className="self-start sm:self-auto">Наблюдатель</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="password">
                <Card>
                  <CardHeader className="py-3 sm:py-4">
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
                      <Button className="mt-2 w-full sm:w-auto">Сменить пароль</Button>
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
