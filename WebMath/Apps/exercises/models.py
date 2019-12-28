from django.db import models

class Exercise(models.Model):
    text_exercise = models.TextField('Текст упражнения')
    answer = models.CharField('Ответ на упражнение', max_length = 200)
    
    class Meta:
        verbose_name = 'Задание'
        verbose_name_plural = 'Задания'
    
class Comment(models.Model):
    exercise = models.ForeignKey(Exercise, on_delete = models.CASCADE)
    author_name = models.CharField('Имя автора',max_length = 50)
    comment_text = models.CharField('Текст комментария',max_length = 255)
    
    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии'
