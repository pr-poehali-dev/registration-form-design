import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();
  const password = watch("password", "");

  const onSubmit = (data: FormData) => {
    console.log("Форма отправлена:", data);
    // Здесь будет логика отправки данных на сервер
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-violet-50 to-white p-4">
      <Card className="w-full max-w-md shadow-lg border-0">
        <CardHeader className="space-y-1 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-center">
            Регистрация
          </CardTitle>
          <CardDescription className="text-violet-100">
            Заполните форму для создания аккаунта
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">ФИО</Label>
              <Input
                id="fullName"
                placeholder="Иванов Иван Иванович"
                {...register("fullName", {
                  required: "Это поле обязательно",
                  minLength: {
                    value: 5,
                    message: "ФИО должно содержать минимум 5 символов",
                  },
                })}
                className={errors.fullName ? "border-red-500" : ""}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                placeholder="+7 (999) 123-45-67"
                {...register("phone", {
                  required: "Это поле обязательно",
                  pattern: {
                    value:
                      /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
                    message: "Введите корректный номер телефона",
                  },
                })}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.ru"
                {...register("email", {
                  required: "Это поле обязательно",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Некорректный email адрес",
                  },
                })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••"
                {...register("password", {
                  required: "Пароль обязателен",
                  minLength: {
                    value: 6,
                    message: "Пароль должен содержать минимум 6 символов",
                  },
                })}
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password ? (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              ) : (
                <p className="text-gray-500 text-xs mt-1">минимум 6 символов</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Подтвердить пароль</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••"
                {...register("confirmPassword", {
                  required: "Подтвердите пароль",
                  validate: (value) =>
                    value === password || "Пароли не совпадают",
                })}
                className={errors.confirmPassword ? "border-red-500" : ""}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 transition-all duration-300"
            >
              Зарегистрироваться
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default RegistrationForm;
