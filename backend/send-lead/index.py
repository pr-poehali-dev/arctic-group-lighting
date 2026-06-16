import json
import os
import smtplib
from email.mime.text import MIMEText
from email.header import Header


def handler(event: dict, context) -> dict:
    '''
    Принимает заявку с сайта (имя, телефон, email, сообщение) и отправляет её на почту менеджера.
    Args: event - dict с httpMethod, body; context - объект с request_id
    Returns: HTTP-ответ со статусом отправки заявки
    '''
    method = event.get('httpMethod', 'GET')

    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': {**cors, 'Access-Control-Max-Age': '86400'}, 'body': ''}

    if method != 'POST':
        return {'statusCode': 405, 'headers': cors, 'body': json.dumps({'error': 'Method not allowed'})}

    body = json.loads(event.get('body') or '{}')
    name = str(body.get('name', '')).strip()
    phone = str(body.get('phone', '')).strip()
    email = str(body.get('email', '')).strip()
    message = str(body.get('message', '')).strip()

    if not name or not phone:
        return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'Укажите имя и телефон'})}

    smtp_host = os.environ.get('SMTP_HOST')
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    manager_email = os.environ.get('MANAGER_EMAIL')

    text = (
        f'Новая заявка с сайта ПРОМСВЕТ\n\n'
        f'Имя: {name}\n'
        f'Телефон: {phone}\n'
        f'Email: {email or "—"}\n'
        f'Сообщение: {message or "—"}'
    )

    msg = MIMEText(text, 'plain', 'utf-8')
    msg['Subject'] = Header('Заявка с сайта АРКТИК ГРУПП', 'utf-8')
    msg['From'] = smtp_user
    msg['To'] = manager_email

    with smtplib.SMTP_SSL(smtp_host, 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, [manager_email], msg.as_string())

    return {'statusCode': 200, 'headers': cors, 'body': json.dumps({'success': True})}
