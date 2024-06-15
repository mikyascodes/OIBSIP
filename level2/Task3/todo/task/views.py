from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .forms import TaskForm
from .models import Task


def create_task(request):
    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('task_page')
    else:
        form = TaskForm()
    return render(request, 'index.html', {'form': form})


def task_page(request):
    if request.method == 'POST' and 'task_id' in request.POST:
        task_id = request.POST.get('task_id')
        task = Task.objects.get(id=task_id)
        task.completed = True
        task.save()
        return redirect('task_page')

    pending_tasks = Task.objects.filter(completed=False)
    completed_tasks = Task.objects.filter(completed=True)
    all_tasks = Task.objects.all()
    return render(request, 'index.html', {
        'pending_tasks': pending_tasks,
        'completed_tasks': completed_tasks,
        'all_tasks': all_tasks,
        'form': TaskForm()
    })


def edit_task(request, task_id):
    task = get_object_or_404(Task, id=task_id)
    if request.method == 'POST':
        edit_form = TaskForm(request.POST, instance=task)
        if edit_form.is_valid():
            edit_form.save()
            return redirect('task_page')
    else:
        edit_form = TaskForm(instance=task)
    return render(request, 'edit_task.html', {
        'edit_form': edit_form,
    })


def delete_task(request, task_id):
    task = get_object_or_404(Task, id=task_id)
    task.delete()
    messages.success(request, 'Task was deleted successfully.')
    return redirect('task_page')
