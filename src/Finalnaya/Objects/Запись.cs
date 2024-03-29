﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Finalnaya
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Запись.
    /// </summary>
    // *** Start programmer edit section *** (Запись CustomAttributes)

    // *** End programmer edit section *** (Запись CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаписьE", new string[] {
            "КодЗаписи as \'Код записи\'",
            "Время as \'Время\'",
            "Дата as \'Дата\'",
            "Сумма as \'Сумма\'",
            "Комментарий as \'Комментарий\'"})]
    [AssociatedDetailViewAttribute("ЗаписьE", "ОказаниеУслуг", "ОказаниеУслугE", true, "", "Оказание услуг", true, new string[] {
            ""})]
    [View("ЗаписьL", new string[] {
            "КодЗаписи as \'Код записи\'",
            "Время as \'Время\'",
            "Дата as \'Дата\'",
            "Сумма as \'Сумма\'",
            "Комментарий as \'Комментарий\'"})]
    public class Запись : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодЗаписи;
        
        private string fВремя;
        
        private System.DateTime fДата;
        
        private double fСумма;
        
        private string fКомментарий;
        
        private IIS.Finalnaya.Клиент fКлиент;
        
        private IIS.Finalnaya.Кабинет fКабинет;
        
        private IIS.Finalnaya.DetailArrayOfОказаниеУслуг fОказаниеУслуг;
        
        // *** Start programmer edit section *** (Запись CustomMembers)

        // *** End programmer edit section *** (Запись CustomMembers)

        
        /// <summary>
        /// Время.
        /// </summary>
        // *** Start programmer edit section *** (Запись.Время CustomAttributes)

        // *** End programmer edit section *** (Запись.Время CustomAttributes)
        [StrLen(255)]
        public virtual string Время
        {
            get
            {
                // *** Start programmer edit section *** (Запись.Время Get start)

                // *** End programmer edit section *** (Запись.Время Get start)
                string result = this.fВремя;
                // *** Start programmer edit section *** (Запись.Время Get end)

                // *** End programmer edit section *** (Запись.Время Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.Время Set start)

                // *** End programmer edit section *** (Запись.Время Set start)
                this.fВремя = value;
                // *** Start programmer edit section *** (Запись.Время Set end)

                // *** End programmer edit section *** (Запись.Время Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (Запись.Дата CustomAttributes)

        // *** End programmer edit section *** (Запись.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (Запись.Дата Get start)

                // *** End programmer edit section *** (Запись.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (Запись.Дата Get end)

                // *** End programmer edit section *** (Запись.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.Дата Set start)

                // *** End programmer edit section *** (Запись.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (Запись.Дата Set end)

                // *** End programmer edit section *** (Запись.Дата Set end)
            }
        }
        
        /// <summary>
        /// КодЗаписи.
        /// </summary>
        // *** Start programmer edit section *** (Запись.КодЗаписи CustomAttributes)

        // *** End programmer edit section *** (Запись.КодЗаписи CustomAttributes)
        public virtual int КодЗаписи
        {
            get
            {
                // *** Start programmer edit section *** (Запись.КодЗаписи Get start)

                // *** End programmer edit section *** (Запись.КодЗаписи Get start)
                int result = this.fКодЗаписи;
                // *** Start programmer edit section *** (Запись.КодЗаписи Get end)

                // *** End programmer edit section *** (Запись.КодЗаписи Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.КодЗаписи Set start)

                // *** End programmer edit section *** (Запись.КодЗаписи Set start)
                this.fКодЗаписи = value;
                // *** Start programmer edit section *** (Запись.КодЗаписи Set end)

                // *** End programmer edit section *** (Запись.КодЗаписи Set end)
            }
        }
        
        /// <summary>
        /// Комментарий.
        /// </summary>
        // *** Start programmer edit section *** (Запись.Комментарий CustomAttributes)

        // *** End programmer edit section *** (Запись.Комментарий CustomAttributes)
        [StrLen(255)]
        public virtual string Комментарий
        {
            get
            {
                // *** Start programmer edit section *** (Запись.Комментарий Get start)

                // *** End programmer edit section *** (Запись.Комментарий Get start)
                string result = this.fКомментарий;
                // *** Start programmer edit section *** (Запись.Комментарий Get end)

                // *** End programmer edit section *** (Запись.Комментарий Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.Комментарий Set start)

                // *** End programmer edit section *** (Запись.Комментарий Set start)
                this.fКомментарий = value;
                // *** Start programmer edit section *** (Запись.Комментарий Set end)

                // *** End programmer edit section *** (Запись.Комментарий Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (Запись.Сумма CustomAttributes)

        // *** End programmer edit section *** (Запись.Сумма CustomAttributes)
        public virtual double Сумма
        {
            get
            {
                // *** Start programmer edit section *** (Запись.Сумма Get start)

                // *** End programmer edit section *** (Запись.Сумма Get start)
                double result = this.fСумма;
                // *** Start programmer edit section *** (Запись.Сумма Get end)

                // *** End programmer edit section *** (Запись.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.Сумма Set start)

                // *** End programmer edit section *** (Запись.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (Запись.Сумма Set end)

                // *** End programmer edit section *** (Запись.Сумма Set end)
            }
        }
        
        /// <summary>
        /// Запись.
        /// </summary>
        // *** Start programmer edit section *** (Запись.Кабинет CustomAttributes)

        // *** End programmer edit section *** (Запись.Кабинет CustomAttributes)
        [PropertyStorage(new string[] {
                "Кабинет"})]
        [NotNull()]
        public virtual IIS.Finalnaya.Кабинет Кабинет
        {
            get
            {
                // *** Start programmer edit section *** (Запись.Кабинет Get start)

                // *** End programmer edit section *** (Запись.Кабинет Get start)
                IIS.Finalnaya.Кабинет result = this.fКабинет;
                // *** Start programmer edit section *** (Запись.Кабинет Get end)

                // *** End programmer edit section *** (Запись.Кабинет Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.Кабинет Set start)

                // *** End programmer edit section *** (Запись.Кабинет Set start)
                this.fКабинет = value;
                // *** Start programmer edit section *** (Запись.Кабинет Set end)

                // *** End programmer edit section *** (Запись.Кабинет Set end)
            }
        }
        
        /// <summary>
        /// Запись.
        /// </summary>
        // *** Start programmer edit section *** (Запись.Клиент CustomAttributes)

        // *** End programmer edit section *** (Запись.Клиент CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиент"})]
        [NotNull()]
        public virtual IIS.Finalnaya.Клиент Клиент
        {
            get
            {
                // *** Start programmer edit section *** (Запись.Клиент Get start)

                // *** End programmer edit section *** (Запись.Клиент Get start)
                IIS.Finalnaya.Клиент result = this.fКлиент;
                // *** Start programmer edit section *** (Запись.Клиент Get end)

                // *** End programmer edit section *** (Запись.Клиент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.Клиент Set start)

                // *** End programmer edit section *** (Запись.Клиент Set start)
                this.fКлиент = value;
                // *** Start programmer edit section *** (Запись.Клиент Set end)

                // *** End programmer edit section *** (Запись.Клиент Set end)
            }
        }
        
        /// <summary>
        /// Запись.
        /// </summary>
        // *** Start programmer edit section *** (Запись.ОказаниеУслуг CustomAttributes)

        // *** End programmer edit section *** (Запись.ОказаниеУслуг CustomAttributes)
        public virtual IIS.Finalnaya.DetailArrayOfОказаниеУслуг ОказаниеУслуг
        {
            get
            {
                // *** Start programmer edit section *** (Запись.ОказаниеУслуг Get start)

                // *** End programmer edit section *** (Запись.ОказаниеУслуг Get start)
                if ((this.fОказаниеУслуг == null))
                {
                    this.fОказаниеУслуг = new IIS.Finalnaya.DetailArrayOfОказаниеУслуг(this);
                }
                IIS.Finalnaya.DetailArrayOfОказаниеУслуг result = this.fОказаниеУслуг;
                // *** Start programmer edit section *** (Запись.ОказаниеУслуг Get end)

                // *** End programmer edit section *** (Запись.ОказаниеУслуг Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.ОказаниеУслуг Set start)

                // *** End programmer edit section *** (Запись.ОказаниеУслуг Set start)
                this.fОказаниеУслуг = value;
                // *** Start programmer edit section *** (Запись.ОказаниеУслуг Set end)

                // *** End programmer edit section *** (Запись.ОказаниеУслуг Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаписьE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаписьE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаписьE", typeof(IIS.Finalnaya.Запись));
                }
            }
            
            /// <summary>
            /// "ЗаписьL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаписьL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаписьL", typeof(IIS.Finalnaya.Запись));
                }
            }
        }
    }
}
