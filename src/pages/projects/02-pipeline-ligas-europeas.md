---
title: Pipeline de Datos Ligas Europeas
url: https://github.com/Daniher01/actualizacion_ligas_futbol
tags: ["Python", "Apache Airflow", "Snowflake", "ETL", "Data Engineering", "Task Groups"]
date: 2025
---

Este proyecto es un pipeline ETL automatizado diseñado para la extracción, transformación y carga de estadísticas de 7 ligas europeas de fútbol. Implementado con Apache Airflow como orquestador principal, el sistema utiliza Task Groups paralelos para optimizar el procesamiento, reduciendo significativamente los tiempos de ejecución de más de 50 minutos a aproximadamente 12 minutos.

El pipeline maneja un volumen considerable de datos con capacidad para procesar más de 100,000 registros por ejecución, almacenándolos en Snowflake como data warehouse principal. La arquitectura del proyecto enfatiza la eficiencia mediante paralelización de tareas, permitiendo que múltiples procesos de extracción y transformación se ejecuten simultáneamente sin bloqueos.

A través de este proyecto se practican conceptos fundamentales de ingeniería de datos como diseño de workflows ETL escalables, optimización de rendimiento mediante paralelización, gestión de grandes volúmenes de datos, orquestación de tareas complejas, y integración con plataformas cloud de almacenamiento de datos modernas.